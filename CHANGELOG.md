# CHANGELOG

This changelog references the relevant changes done between versions.

To get the diff for a specific change, go to https://github.com/LIN3S/SyliusShopApiClient/commit/XXX where XXX is the change hash 
To get the diff between two versions, go to https://github.com/LIN3S/SyliusShopApiClient/compare/v0.2.0...v0.3.0

* 0.9.0
    * [FEATURE] Added user `requestPasswordReset` and `passwordReset` endpoints
* 0.8.0
    * [FEATURE] Config will accept a new parameters `cartTokenCookie` that will be cart cookie's name if any
* 0.7.7
    * [FEATURE] Add locale params to checkout complete method
* 0.7.6
    * [FIX] Add error control to checkout complete method
* 0.7.5
    * [FIX] Added auth params to checkout choose payment method
* 0.7.4
    * [FIX] Invalid npm publish
* 0.7.3
    * [FIX] Added auth params to choose shipping method endpoint
* 0.7.2
    * [FEATURE] Added config values for cookie expiration: `cartCookieExpiration` and `userCookieExpiration` in milliseconds
* 0.7.1
    * [FIX] Added missing pagination params to Product by taxon endpoint
* 0.7.0
    * [FEATURE] Session will receive config params and will be exposed from index's default export
    * [FEATURE] Config will accept a new parameters `cookieDomain` that will be cookie's domain if any
    * [BC Break] Session can't be imported directly, but as a part of default export:
    `const api = createSyliusApiClient({...}); api.Session.removeCookie(...)`
    * [BC Break] `requestConfig.authParams` should receive now `config` parameter
* 0.6.4
    * [FIX] Capture not found exception in cart summary
* 0.6.3
    * [FIX] Array merge in Checkout Address and Complete
* 0.6.2
    * [FIX] Allow additional items in AddItem endpoint
* 0.6.1
    * [FIX] Checkout address method now includes auth headers
* 0.6.0
    * [FIX] Cookies not being deleted properly due to domain mismatch. Session API changed due to those changes
    * [BC Break] `Session.removeCookie` accepts a second parameter type object instead of directly `path`.
    Instead of `removeCookie('name', '/path')` it will be `removeCookie('name', {path: '/path'})`
    * [BC Break] `Session.setCookie` does not have a default value for `domain`
* 0.5.0
    * [FEATURE] Added change item quantity endpoint
* 0.4.2
    * [FIX] Add error control to products by taxon slug method
* 0.4.1
    * [FIX] Prevent crash when order has now shipping methods available
* 0.4.0
    * [FEATURE] Added user me endpoint
    * [FEATURE] Added user register endpoint
* 0.3.0
    * [FEATURE] Added remove item from cart endpoint 
* 0.2.2
    * [FIX] Resolve promise when cart does not exist in cart summary
* 0.2.1
    * [FIX] Fixed issue with User token cookie storage not setting cookie correctly
* 0.2.0
    * [FEATURE] Made accesible Session and requestConfig objects
* 0.1.0
    * Initial release
