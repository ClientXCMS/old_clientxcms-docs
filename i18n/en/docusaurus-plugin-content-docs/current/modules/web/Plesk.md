---
sidebar_position: 2
---

# Plesk

The Plesk module allows you to provide Plesk offers to your customers. The module supports web resellers and simple hosting. It works with Plesk plans which makes it very easy to configure since you just need to link a product to a Plesk plan.
:::success To know
This module is compatible with versions 11, 11.5, 12, 12.5, Onyx, and Obsidian of Plesk.
:::
:::info
To use the features of the module, the PHP **XML** extension must be active on your hosting. To install it : 
```bash
apt install php-xml
```
:::
:::info Modules
To use the following features, you need to have the Plesk module enabled on your ClientXCMS. [click here to activate it](../)
:::
### Supported features 
- Automate account creation and provisioning
- Hosting management from the customer area
- Automatic connection to Plesk
- Reset passwords and manage accounts
- Automate suspensions and terminations

## Server creation

Create a ClientXCMS server in `Administration Area` > `System` > `Servers` > `New` by selecting the server type as "Plesk". 

![img](https://media.discordapp.net/attachments/926274245225504779/962908593890406430/unknown.png)

**IP Address**: Subdomain or IP address of Plesk

**Username** : Admin username

**Password** : admin password

The following port must be open to connect ClientXCMS to your Plesk: 8443

You can test the connection to the server and verify that the server returns *"Success "* in response.

## Configuring the offer
First, [create your product](../../store/product#creation) by selecting **Plesk Hosting** for web hosting or **Plesk Reselling** to deliver web resellers.
![img](https://media.discordapp.net/attachments/926274245225504779/962910219158028318/unknown.png)
After pressing the "Next" button it will redirect you to the offer configuration page. If the field is empty, make sure that your server is not hidden, in this case it will not be taken into account in the system to retrieve the Plesk plans.

![img](https://media.discordapp.net/attachments/926274245225504779/962911997190610984/unknown.png)

In this page you will be able to select the plan to be delivered to your customers and save.
## List of configurations
You can see the list of your Pterodactyl configurations from `Administration Area` > `Utilities` > `Plesk`.

![img](https://media.discordapp.net/attachments/926274245225504779/962912787334574100/unknown.png)
You can directly modify the configuration of a product in the "Actions" column by clicking on the blue button.

## Creation manually

## Management panel
### Admin side
![img](https://media.discordapp.net/attachments/926274245225504779/962913723046047804/unknown.png)

### Customer side
![img](https://media.discordapp.net/attachments/926274245225504779/962916921416753335/unknown.png)