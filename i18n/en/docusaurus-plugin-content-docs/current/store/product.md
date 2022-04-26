---
sidebar_position: 1
---

# Products

To sell your services a product system is available to manage the automation of delivery, stock management and configuration.

To access it: `Administration Area` > `Store` > `Products`

## Product list
![img](https://media.discordapp.net/attachments/475073153509490689/957675371279577229/unknown.png)
### Buttons
![img](https://media.discordapp.net/attachments/475073153509490689/957675470185435246/unknown.png)

**First button** : Allows you to edit the global information of the product

**Second button** : Allows you to edit the product configuration

**Third button** : Allows you to clone the global information of the product

**Fourth button** : Allows you to delete the product

## Creation
![img](https://media.discordapp.net/attachments/475073153509490689/957678648746446898/unknown.png)
**Product name**(text): Sales name that will be displayed to customers

**Group**(select) : Associated group - Can't be in any group [(If empty create one here)](./group#creation)

**Order**(text) : Order of appearance - [Managed natively by Product Reorganization](./group#product-reorganization)

**Type**(select) : Type of product - [(If empty activate a supply module here)](/en/docs/modules#activate-a-module)

**Payment type**(select) : Payment type for the product

**Description**(text): Text with the description of the product

**Hidden**(checkbox): Allows you to hide the product or not. [refer here for more information](./product#product-hidden)


### Available payment types
#### Free
The customer will not have to pay anything to get the service. An invoice will still be issued. Ideal for free trials over a short period of time.
![img](https://media.discordapp.net/attachments/475073153509490689/957681991212482560/unknown.png)
#### For life
The customer pays once for his service and will not have to pay to renew it.

You can add a price and a potential installation fee to be charged to your customer at the time of purchase.

![img](https://media.discordapp.net/attachments/475073153509490689/957681127345238016/unknown.png)
#### Recurring
The customer must renew his service when it expires to keep it online.

You should add a price and potential setup fee to be charged to your customer at the time of purchase for each billing cycle and offer discounts for long cycles.

You can also leave ZERO as a value to disable the billing cycle.

![img](https://media.discordapp.net/attachments/475073153509490689/957682824255766538/unknown.png)

:::info
Pro tip: You can directly configure the price monthly and by clicking on the calculator button, it will configure the price for other billing cycles.
:::
## Edit
### Editing the configuration
You can edit the specific configuration of each module by clicking on the third button or on the "Product configuration" button from the editing page.
:::info
Please refer to the module page for more information in terms of product configuration.
:::
## Delete
:::danger
Deleting a product may cause problems in the system.
:::
You can delete a product by clicking the red button in the "Actions" column. You will be asked for confirmation and then the product will be deleted.


## Hidden product
This option allows you to decide if the product should not be available for purchase. It will display the product more in the store in one click. To hide a product, check the checkbox in the "#" column, the red light will change to green.

**Red** : Not hidden, the product is displayed and can be ordered.

**Green**: Hidden, the group is not displayed and not orderable.
