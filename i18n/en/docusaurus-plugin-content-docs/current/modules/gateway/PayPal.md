---
sidebar_position: 2
---

# PayPal Checkout
![img](https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png)

The PayPal module allows you to accept payments via PayPal from your customers.
## Live mode vs Sandbox mode
The live mode of paypal allows to accept real payments (Used in production).
The sandbox mode allows you to issue test payments without spending real money (Used in development or for testing)

## Get your api keys

Go to your [PayPal Developer Panel](https://developer.paypal.com/developer/applications), log in and create API credentials.

To do this, you need to go to the **Live** category (or Sandbox for development) and click on "**Create App**" with the desired name (*for example: ClientXCMS*).
![img](https://media.discordapp.net/attachments/926274245225504779/954709850095484969/live.png)
![img](https://media.discordapp.net/attachments/926274245225504779/954709927073546270/creation.png)

Then you just have to click on the **name of your application** (*ClientXCMS in our case*) and you will be able to access the information of the application:
- Client ID
- Secret (Which you must generate if necessary*).
![img](https://media.discordapp.net/attachments/926274245225504779/954710485851308053/informations.png)


## Installation

After activating the PayPal module and retrieving its API keys, you will be redirected to the API keys configuration page to synchronize ClientXCMS to PayPal.
You can also click on the purple button located in the top right corner of the module box 
![img](https://media.discordapp.net/attachments/926274245225504779/954708583726071828/unknown.png)
- PayPal Secret : the secret key that Paypal gives
- PayPal Id : the id of the application that Paypal gives
- PayPal live : Enabled in live otherwise Disabled

![img](https://media.discordapp.net/attachments/926274245225504779/954711209582673970/unknown.png)
You can test the PayPal connection to ClientXCMS. If the connection is successful it will persist the information

If you have any problem with the connection please contact our support.

## Transaction
All PayPal transactions with payment details are available on the `Administration Area` > `Invoicing` > `PayPal` page
It is also possible to search for a payment by the payment id.
![img](https://media.discordapp.net/attachments/926274245225504779/954707212192858162/unknown.png?width=1440&height=285)
### Payment page
![img](https://media.discordapp.net/attachments/926274245225504779/954712993671831552/unknown.png)

The client selects the PayPal payment type. ClientXCMS will redirect him to the paypal checkout to pay and then is redirected to your site to complete the order.
After this, the transaction will be set as paid and the services will be delivered.
### Tax on payments

You can add special taxes for payments via PayPal for this, go to `Administration Area` > `Settings` > `Payments taxes`
![img](https://media.discordapp.net/attachments/926274245225504779/954713525102714880/unknown.png)
### Transaction of a customer
The list of Dedipass transactions is available on the edit page of a user `Administration Area` > `User` > `Edit` > `Services/Linked Transactions`
![img](https://media.discordapp.net/attachments/926274245225504779/954712356057935943/unknown.png)