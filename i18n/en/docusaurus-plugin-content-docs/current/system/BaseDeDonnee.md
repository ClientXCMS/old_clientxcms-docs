---
sidebar_position: 6
---

# Database

## Introduction 
CLIENTX uses the MySQL relational system to store your customer data and the data needed for the CMS to function properly. A database is mandatory (blank or not) to contain the tables necessary for the proper functioning of the CMS. The PDO (PHP Data Objects) system is used to interact with the database. It is therefore necessary that the MySQL extension and PDO are installed on your web hosting.

## Connection
The connection information to the database is requested in the ``.env``. This file must not be versioned. Here is an example:
```
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=clientx
DB_USER=root
DB_PASS=root
DB_CHARSET=utf8
```
# Special Characters
In case of special characters in the password or username for accessing the database. You can add double quotes `""` to your string.
## Test the connection

To verify that the connection between CLIENTXCMS and MySQL is working, open a CLIENTXCMS page:
If it fails, the page returns the error message:
`Database connection error`.

For more details, change the environment key `APP_ENV` to `dev` in the ``.env``.
Be careful, the identifiers may appear on the page. But this may help you to solve the problem.

## Migration

To manage database migrations (for development or production). ClientXCMS uses [phinx.org](https://phinx.org/). You can refer to their documentation to learn more about how it works.

A visual interface is available at `Administration Area` > `Database`. 
### Important commands 
- Migrate <br/>

    This command allows you to migrate the missing migrations.
    ```
    ./vendor/bin/phinx migrate
    ```

- Create <br/>

    This command is important in development, it allows to create a migration.
    ```
    ./vendor/bin/phinx create FirstMigration
    ```

- Seed <br/>

    This command allows you to fill your database with pre-defined data or generate dynamically via the library [faker](https://github.com/fzaninotto/Faker)
    ```
    ./vendor/bin/phinx seed:run
    ```
    ou
    ```
    ./vendor/bin/phinx seed:create PremierSeeding
    ```
