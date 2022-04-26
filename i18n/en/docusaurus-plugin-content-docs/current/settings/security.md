---
sidebar_position: 1
---

# Security
**ClientXCMS** implements settings to improve the security of your client area for your own security and that of your users.

## Authentication & Limitation
**Banned emails or domains on registration**(text): Separated by commas, allows you to deny registration to certain users/user groups. Only affects new registrations, existing accounts are only banned.

Example: `fake@clientxcms.com, protonmail.com`

**No. of Attempts**(number): When a user tries to log in a certain number of times and fails, the ClientXCMS blocks all connections from the user for X minutes. Use the value 0 (Zero) to disable this feature. Default value: 3

**Connection Limiting Minutes**(minutes): The amount of time the user must wait to be unblocked. Default: 30

**Link to the general terms of use**(link): Link to the TOS of your company, each user will have to certify that he/she has read this document by validating a checkbox at registration.

**Request user account confirmation**(boolean): Allows you to send a confirmation email when registering to validate the user's email address. Default value: enabled

**Allow users to register**(boolean): Allow your customers to register. If this option is disabled, you should create the user account from the user management area. Default value : enabled

**Allow password reset to users**(boolean): Allow the process of resetting user passwords. Default value: enabled
## Recaptcha
It is important to protect yourself from potential spam/unwanted accounts created by bots.
### Configure ReCaptcha
After registering or logging into your [google console](https://www.google.com/recaptcha/admin/), you need to [create a site](https://www.google.com/recaptcha/admin/create).

**Title** Name of your website 

**ReCAPTCHA type**: ReCAPTCHA version 2 > "I am not a robot" checkbox

**Domains**: Domain of your CLIENTXCMS (including subdomain)

![img](https://media.discordapp.net/attachments/475073153509490689/957054073738248212/registered.png)

Once your site is registered, the API keys will appear. You will select "Configure Google reCaptcha protection" then to finish fill in the fields in your settings
![img](https://media.discordapp.net/attachments/475073153509490689/957054632042070016/unknown.png)
### Configure HCaptcha
After registering or logging into your [Hcaptcha dashboard](https://dashboard.hcaptcha.com/overview), you must [new site](https://dashboard.hcaptcha.com/sites/new).

**Name** Name of your website

**Difficulty**:Moderate

**Domains**: Domain of your CLIENTXCMS (including subdomain)

**Filter**: Business and industry

![img](https://media.discordapp.net/attachments/475073153509490689/957056521865404446/registering.png)
Once your site is registered, the API keys will appear. You will select "Configure Hcaptcha protection" then to finish fill in the fields in your settings
![img](https://media.discordapp.net/attachments/475073153509490689/957059536232022068/unknown.png)
### None
You can disable all Captcha by selecting "No" in the validation fields via ......
