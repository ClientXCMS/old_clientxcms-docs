---
sidebar_position: 4
---

# Servers

Each of your customers' products/services is linked to a ClientXCMS server that allows you to connect your ClientXCMS to your Plesk (or other). To access it `Administration Panel` > `System` > `Servers` (/admin/servers)
![img](https://media.discordapp.net/attachments/475073153509490689/957595619369824286/unknown.png)
## Creation
### Server details
![img](https://media.discordapp.net/attachments/475073153509490689/957604236793872465/unknown.png)

**Server Name**(text): Name that will be displayed for your information.

**IP Address**(ip/hostname): IP address or hostname that will be used to connect to your server.

**Monthly cost**(number) : Monthly cost of your server for information purposes. Will never be displayed to your customers.

**Maximum number of accounts**(number) : Maximum number of accounts for your information. Will never be displayed to your customers.

**Location**(text) : Location of your server for information. Will be displayed to your customers.

**Server type**(select) : Server type. Will be used to test the connection and connect to your server.

**Hidden**(checkbox) : Allows you to hide the server or not. [refer here for more information](servers#test-of-connection)

### Name servers
![img](https://media.discordapp.net/attachments/475073153509490689/957604370189533185/unknown.png)
:::info
The following fields are used for web hosting reseller servers (Plesk, cPanel). They can be left blank if not needed.
:::

**First name server**(ip/hostname) : First name server

**Second name server**(ip/hostname) : Second name server

**Third name server**(ip/hostname) : Third name server

**Fourth name server**(ip/hostname) : Fourth name server

**Fifth name server**(ip/hostname) : Fifth name server

These fields will be displayed in the advanced management panel of your clients.
You can leave them empty, they will not be displayed.
### Authentication
![img](https://media.discordapp.net/attachments/475073153509490689/957604546371272744/unknown.png)

:::info
The following fields are specific to each server type. Please refer to the module page for more information.
:::
**Security**(select) : Enable it if your server is protected by an HTTPS certificate

### Custom port
![img](https://media.discordapp.net/attachments/475073153509490689/957605207053840394/unknown.png)
:::info
Some modules don't support this feature
:::
You can customize the port used
Default value : 

Module         | Port           |
|------------  | ------------   |
| Proxmox      | 8806           |
| Wisp         | 80             |
| Pterodactyl  | 80             |
| cPanel       | 2083           |
| Plesk        | 80             |
| Virtualizor  | 4083           |
| VirtualizorCloud | 4085      |

## Deleting
You can delete a server by clicking on the red button in the "Actions" column. You will be asked for confirmation, after this it will delete the server and all data attached to it.
## Edit
To edit a server, press the blue button in the "Actions" column.
Change the information as you wish and then [Test connection](servers#test-of-connection) to be sure you haven't desynchronized anything.
:::danger
It is not recommended to change the server type. This could cause serious repercussions if there are products/services already configured on the server.
[You can create another server to avoid any problem](servers#creation)
:::
![img](https://media.discordapp.net/attachments/475073153509490689/957599353571250196/unknown.png)

## Hidden server
This option allows you to decide if the server should not be used by default to create services for your clients. To hide a server, check the checkbox in the "#" column, the red light will change to green.

**Green** : Not hidden, services can be created on it.

**Red** : Hidden, services can be created on it (It can still be used when an existing service is on it).

## Connection test
To check that ClientXCMS can connect to the API of your remote server (Plesk for example). A button is available to test the connection and give you feedback.

In case of success, you will receive **Success** with a status of **200**. Otherwise in case of failure, it will tell you what the problem is with a status of **500**.

After this test, you can create/save your ClientXCMS server with peace of mind, it is well connected.

Translated with www.DeepL.com/Translator (free version)
![img](https://media.discordapp.net/attachments/475073153509490689/957598827563606047/unknown.png)