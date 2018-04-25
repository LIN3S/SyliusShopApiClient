# CHANGELOG

This changelog references the relevant changes done between versions.

To get the diff for a specific change, go to https://github.com/LIN3S/SyliusShopApiClient/commit/XXX where XXX is the change hash 
To get the diff between two versions, go to https://github.com/LIN3S/SyliusShopApiClient/compare/v0.2.0...v0.3.0

* 0.6.3
    * [FIX] Array merge in Checkout Address and Complete
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
