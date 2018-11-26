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

`import createSyliusApiClient from 'lin3s-sylius-shop-api-client';`

* Using `require()`:

`const createSyliusApiClient = require('lin3s-sylius-shop-api-client');`

**Initialize the client**

```js
const api = createSyliusApiClient({
    baseUrl: 'localhost',
    channel: 'default',
    cookieDomain: '.myapp.com',
    locale: 'en_US',
    cartCookieExpiration: 604800000,
    userCookieExpiration: 2592000000,
    cartTokenCookie: 'cart-token',
})
```

## Usage

For example to use the `productsByTaxonSlug` using the parameters as described in the API docs bellow (`{slug}` = 
an object containing slug property and its value):

```js
const products = api.taxon.productsByTaxonSlug({slug: 'some-slug'});
```

**Adding custom endpoints**

In case a new endpoint is created in shop-api you can still use the configuration of the client. Your custom function
will receive the config via parameters and it must return a function. This function has to be passed in the constructor.
An example:

```js
import axios from 'axios';
// You can make use of requestConfig helpers and session values
import createSyliusShopApiClient, {requestConfig} from 'lin3s-sylius-shop-api-client';

const myCustomEndpoint = config => () => new Promise(resolve => {
  axios.get(`${config.baseUrl}/shop-api/my-custom-endpoint`)
    .then(response => resolve(response.data));
});

const api = createSyliusApiClient({
  baseUrl: 'localhost',
  channel: 'default',
  locale: 'en_US',
  customEndpoints: {
    myCustomEndpoint
  }
});

// Usage
const response = api.custom.myCustomEndpoint();
api.Session.Cart.remove();
```

## API

### Cart `api.cart`

|Method|Params|Status|
|---|---|---|
|**api.cart.pickup**|~|✅|
|**api.cart.summary**|~|✅|
|**api.cart.drop**||❌|
|**api.cart.addItem**|{productCode, variantCode, quantity}|✅|
|**api.cart.addItems**|[{productCode, variantCode, quantity}]|❌|
|**api.cart.changeItemQuantity**||✅|
|**api.cart.removeItem**|{orderItemId}|✅|
|**api.cart.estimatedShippingCost**||❌|
|**api.cart.addCoupon**||❌|
|**api.cart.removeCoupon**||❌|

### Checkout `api.checkout`

|Method|Params|Status|
|---|---|---|
|**api.checkout.summary**||❌|
|**api.checkout.address**|{shippingAddress, billingAddress}|✅|
|**api.checkout.chooseShippingMethod**|{shipmentId, methodCode}|✅|
|**api.checkout.choosePaymentMethod**|{paymentId, methodCode}|✅|
|**api.checkout.availableShippingMethods**|~|✅|
|**api.checkout.availablePaymentMethods**|~|✅|
|**api.checkout.complete**|{notes}|✅|


### Product `api.product`

|Method|Params|Status|
|---|---|---|
|**api.product.bySlug**|{slug}|✅|
|**api.product.byCode**||❌|
|**api.product.reviewsBySlug**||❌|
|**api.product.reviewsByCode**||❌|
|**api.product.addReviewBySlug**||❌|
|**api.product.addReviewByCode**||❌|
     
### Taxon `api.taxon`
   
|Method|Params|Status|
|---|---|---|
|**api.taxon.all**||✅|
|**api.taxon.byCode**||❌|
|**api.taxon.productsByTaxonCode**||❌|
|**api.taxon.productsByTaxonSlug**|{slug}|✅|

### User `api.user`

|Method|Params|Status|
|---|---|---|
|**api.user.register**|{email, firstname, lastname, plainPassword}|✅|
|**api.user.resendVerificationLink**||❌|
|**api.user.verifyAccount**||❌|
|**api.user.requestPasswordReset**||❌|
|**api.user.passwordReset**||❌|
|**api.user.login**|{_username, _password}|✅|
|**api.user.me**|~|✅|
