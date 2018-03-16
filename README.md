# SyliusShopApiClient

JavaScript client on top of [SyliusShopApiPlugin](https://github.com/Sylius/SyliusShopApiPlugin) to build integrations
with ease.

## Installation

**Download the package:**

* Using npm

`$ npm install lin3s-sylius-shop-api-client`

* Using yarn

`$ yarn add lin3s-sylius-shop-api-client`

**Import the client:**

* Using `import`: 

`import createSyliusApiClient from 'lin3s-sylius-api-client';`

* Using `require()`:

`const createSyliusApiClient = require('lin3s-sylius-api-client');`

**Initialize the client**

`const api = createSyliusApiClient({baseUrl: 'localhost', channel: 'default'})`

## Usage

For example to use the `productsByTaxonSlug` using the parameters as described in the API docs bellow (`{slug}` = 
an object containing slug property and its value):

```js
const products = api.taxon().productsByTaxonSlug({slug: 'some-slug'});
```

## API

### Cart `api.cart()`

|Method|Params|Status|
|---|---|---|
|**api.cart().pickup**|~|✅|
|**api.cart().summary**|~|✅|
|**api.cart().drop**||❌|
|**api.cart().addItem**|{productCode, variantCode, quantity}|✅|
|**api.cart().addItems**|[{productCode, variantCode, quantity}]|❌|
|**api.cart().changeItemQuantity**||❌|
|**api.cart().removeItem**||❌|
|**api.cart().estimatedShippingCost**||❌|
|**api.cart().addCoupon**||❌|
|**api.cart().removeCoupon**||❌|

### Checkout `api.checkout()`

|Method|Params|Status|
|---|---|---|
|**api.checkout.summary**||❌|
|**api.checkout.address**|{shippingAddress, billingAddress}|✅|
|**api.checkout.chooseShippingMethod**|{shipmentId, methodCode}|✅|
|**api.checkout.choosePaymentMethod**|{paymentId, methodCode}|✅|
|**api.checkout.availableShippingMethods**|~|✅|
|**api.checkout.availablePaymentMethods**|~|✅|
|**api.checkout.complete**|{notes}|✅|


### Product `api.product()`

|Method|Params|Status|
|---|---|---|
|**api.product.bySlug**||❌|
|**api.product.byCode**||❌|
|**api.product.reviewsBySlug**||❌|
|**api.product.reviewsByCode**||❌|
|**api.product.addReviewBySlug**||❌|
|**api.product.addReviewByCode**||❌|
     
### Taxon `api.taxon()`                                                                                          
   
|Method|Params|Status|
|---|---|---|
|**api.taxon.all**||❌|
|**api.taxon.byCode**||❌|
|**api.taxon.productsByTaxonCode**||❌|
|**api.taxon.productsByTaxonSlug**|{slug}|✅|

### User `api.user()`

|Method|Params|Status|
|---|---|---|
|**api.user.register**||❌|
|**api.user.resendVerificationLink**||❌|
|**api.user.verifyAccount**||❌|
|**api.user.requestPasswordReset**||❌|
|**api.user.passwordReset**||❌|
|**api.user.login**|{_username, _password}|✅|
|**api.user.me**||❌|
