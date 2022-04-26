---
sidebar_position: 1
---

# Backup
**ClientXCMS** allows you to backup your database. You can manage your different backups of your database.

An easy integration with **ClientXCMS** that offers a database backup management so that no data is lost.
A CRON task runs every 12 hours (or manually) to back up the entire database tables.
To access it: `Administration Area` > `Backup`.

![img](https://media.discordapp.net/attachments/829844680539111486/957442535767289876/unknown.png?width=1440&height=390)
## Downloading a backup
You can download a backup of your database to your computer to keep it in memory. Just click on the blue button in the "Actions" column and it will download the file in **.sql** format.

## Deleting a backup
You can delete a backup for reasons of space or even because it is too old. To do so, you just have to click on the red button in the "Actions" column, a validation will be asked to verify that you are sure you want to delete a backup. After confirmation, the backup will be deleted from the server.
## Creating manually
You can create a backup of your database right now. Just click on the button in the upper right corner "Create manually". After this the backup will be visible in the main table.
## Storage
Backups are stored in the `/Backups` folder in the root of your server.