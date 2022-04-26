---
sidebar_position: 3
---

# E-Mail
**ClientXCMS** sets up parameters to send emails securely to your customers.

## Configuration
**E-mail address used to send e-mails**(email) : Address that will be displayed above the sending information. Default value: contact@clientxcms.com

**Domain**(domain) : Domain that will be used to create the links in the emails. Default value: Installation domain

**Greeting**(text): Greeting message on each email.
Default value: Hello `{{ current_user().name }},`.

**Greeting**(text): Greeting message under each email.
Default value: Kind regards `{{ config('app.name'}}` 

For Greeting and Salutations it is possible to use the information of the connected user.
```
{{ current_user().name }} First name + Last name of the user

{{ current_user().firstname }} User's first name

{{ current_user().lastname }} User's last name
```
[More information here](../developpers/variables)

## Email sending management
You can manage the sending of your emails from your `Administration Area` > `Email Sending` available from the navigation menu.
![img](https://media.discordapp.net/attachments/475073153509490689/957065809396641883/unknown.png)
You can see the date the email was sent, its recipient or its subject. The first button allows you to manually resend the e-mail if it has not been sent yet.
The second button allows you to view in a new tab the content of the email as sent in the mailbox.

### Sending an email to a client
You can directly send a personalized message to a specific customer(s)

![img](https://media.discordapp.net/attachments/475073153509490689/957067741293072384/unknown.png)
You can use variables with user information. [More information here](../developers/variables)

### Send mass emails
You can send personalized emails for each registered user. To do this, select "Send to all customers". ClientXCMS will take care of sending an email to each customer.

### Send email as a cron job
In case of failure to send the email, the email is saved in the database to be sent later.

### Via sendmail
By default, ClientXCMS sends via sendmail. It is recommended to use SMTP servers for a more secure email sending and to avoid that emails are directly put in the spam folder of the email service.
### Via SMTP servers
**SMTP Password**(password): Password of the SMTP server

**SMTP username**(text): SMTP server username

**SMTP hostname**(hostname): SMTP server hostname

**SMTP port**(text): SMTP server port (default: 1025)

**Encryption**(Select): SMTP server sending encryption (default: TLS)
![img](https://media.discordapp.net/attachments/475073153509490689/957091158134235236/unknown.png)
After this you can test the connection by sending a test email.
### Test email

You can test that your emails are sending correctly by pressing the grey "Test connection" button. It will send a test email to the email address of the connected administrator account.
It will alert you if the email went through or if there are any problems sending it. 

## Customization

You can customize your emails by adding email themes available for purchase or modify the templates [here](../system/ModeleEmail)
![img](https://media.discordapp.net/attachments/680169678420836385/939945663339315300/truc_xhaite.png)

After your purchase, you can create a file `/Emails/custom.html.twig` with the content of the archive.
You can then test what the visual changes in the e-mails have done to it.