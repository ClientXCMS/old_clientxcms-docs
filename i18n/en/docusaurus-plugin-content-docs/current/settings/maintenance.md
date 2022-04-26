---
sidebar_position: 4
---

# Maintenance
**ClientXCMS** introduces a system that allows you to put the client space in maintenance: blocking access to unauthorized users.

**Information**: Services will still function normally, users will no longer be able to log in to their client account.
## Activation
To activate maintenance, check the 'Enable maintenance' checkbox, the maintenance details will appear. Then save your changes by pressing "Save".
## Configuration
**Message**(text): Message that will be displayed to unauthorized users. Default value: System in maintenance.

**Start**(date/time) : Date of start of maintenance, after this date all users will be filtered.

**End**(date/time) : End date of the maintenance, after this date all users will be able to use the customer area again.

**URL**(URL) : URL allowing to pass through the maintenance and use the customer area in a classical way
The URL must remain secret to your customers. It is strongly recommended to modify the value.
Default value : /weareinmantenance
![img](https://media.discordapp.net/attachments/475073153509490689/957092998091526184/unknown.png)
## Deactivation
To deactivate the maintenance mode, uncheck the 'Enable maintenance' checkbox, the maintenance details will disappear. Then save your changes by pressing "Save".
## Modify the maintenance view
To modify the maintenance page according to the theme, go here: `/Themes/NomThemes/403.twig`
If this file doesn't exist you have to modify the following file: `/Templates/maintenance.twig`.