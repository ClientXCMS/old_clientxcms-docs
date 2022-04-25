<?php
/**
 * CLIENTXCMS - A Customer manager, easy billing made for everyone from France
 *
 * @package  ClientXCMS
 * @author   DELEBECQUE MARTIN <delebecque.martin@gmail.com>
 */
use App\Account\AccountModule;
use App\Auth\Middleware\Auth2FAMiddleware;
use App\Event\EventModule;
use ClientX\Middleware\RoleMiddleware;
use App\ClientX\Middleware\XSSMiddleware;
use ClientX\Middleware\CsrfMiddleware;
use ClientX\Middleware\DispatcherMiddleware;
use ClientX\Middleware\MethodMiddleware;
use ClientX\Middleware\RouterMiddleware;
use ClientX\Middleware\NotFoundMiddleware;
use ClientX\Middleware\TrailingSlashMiddleware;
use App\Admin\AdminModule;
use App\Admin\Middleware\FirewallMiddleware;
use App\Admin\Middleware\LoggedInAdminMiddleware;
use App\Auth\AuthModule;
use App\Auth\Middleware\ForbiddenMiddleware;
use App\Auth\Middleware\RememberMiddleware;
use App\Basket\BasketModule;
use App\Cloudflare\TrustMiddleware;
use App\Main\MainModule;
use App\Shop\ShopModule;
use App\Support\SupportModule;
use ClientX\Middleware\RendererRequestMiddleware;
use ClientX\Auth\LoggedInMiddleware;
use ClientX\Middleware\BannedIPMiddleware;
use ClientX\Middleware\CheckVersionMiddleware;
use ClientX\Middleware\InstallMiddleware;
use ClientX\Middleware\LocaleMiddleware;
use ClientX\Middleware\MaintenanceMiddleware;
use ClientX\Middleware\Recaptcha\RecaptchaMiddleware;
use ClientX\Middleware\SchemeMiddleware;
use GuzzleHttp\Psr7\ServerRequest;
use Themes\Stisla\StislaTheme;
use function Http\Response\send;

error_reporting(E_ALL);
ini_set('display_errors', 'On');
chdir(dirname(__DIR__));
if (file_exists("vendor/autoload.php") === false) {
    die("Composer must be installed. cf : https://clientxcms.com/ref/composer");
}

require "vendor/autoload.php";
if (!\ClientX\App::checkPHPVersion()) {
    $version = \ClientX\App::PHP_REQUIRED_VERSION;
    die("Your php version must be $version.x (" . PHP_VERSION . ")");
}
$app = (new ClientX\App())
    ->setTheme(new StislaTheme())
    ->addDefinitions('config/main.php')
    ->addDefinitions('config/config.php')
    ->addTranslatorFile('fr_FR', 'Lang/fr/global.php')
    ->addTranslatorFile('fr_FR', 'Lang/fr/translator.php')
    ->addTranslatorFile('en_GB', 'Lang/en/global.php')
    ->addModule(AdminModule::class)
    ->addModule(MainModule::class)
    ->addModule(AuthModule::class)
    ->addModule(AccountModule::class)
    ->addModule(SupportModule::class)
    ->addModule(ShopModule::class)
    ->addModuleIfExist(EventModule::class)
    ->addModule(BasketModule::class);
$container = $app->getContainer();
$app
    ->pipe(TrailingSlashMiddleware::class)
    ->pipe(TrustMiddleware::class)
    ->pipe(XSSMiddleware::class)
    ->pipe(InstallMiddleware::class)
    ->pipe(CheckVersionMiddleware::class)
    ->pipe(BannedIPMiddleware::class)
    ->pipe(MaintenanceMiddleware::class)
    ->pipe(SchemeMiddleware::class)
    ->pipe(LocaleMiddleware::class)
    ->pipe(RememberMiddleware::class)
    ->pipe(ForbiddenMiddleware::class)
    ->pipe($container->get('clientarea.prefix'), Auth2FAMiddleware::class)
    ->pipe($container->get('admin.prefix'), Auth2FAMiddleware::class)
    ->pipe(RecaptchaMiddleware::class)
    ->pipe(RendererRequestMiddleware::class)
    ->pipe($container->get('admin.prefix'), LoggedInAdminMiddleware::class)
    ->pipe($container->get('clientarea.prefix'), LoggedInMiddleware::class)
    ->pipe(MethodMiddleware::class)
    ->pipe(RouterMiddleware::class)
    ->pipe(CsrfMiddleware::class)
    ->pipe(FirewallMiddleware::class)
    ->pipe($container->get('admin.prefix'), RoleMiddleware::class)
    ->pipe(DispatcherMiddleware::class)
    ->pipe(NotFoundMiddleware::class);
if (php_sapi_name() !== 'cli' && isset($inMigrate) === false && isset($inCron) === false) {
    $request = ServerRequest::fromGlobals();
    $response = $app->run($request);
    send($response);
}
