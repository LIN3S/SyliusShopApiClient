import mapValues from 'lodash.mapvalues';

import cartPickup from './Cart/Pickup';
import cartSummary from './Cart/Summary';
import cartAddItem from './Cart/AddItem';

import checkoutAddress from './Checkout/Address';
import checkoutAvailableShippingMethods from './Checkout/AvailableShippingMethods';
import checkoutAvailablePaymentMethods from './Checkout/AvailablePaymentMethods';
import checkoutChoosePaymentMethod from './Checkout/ChoosePaymentMethod';
import checkoutChooseShippingMethod from './Checkout/ChooseShippingMethod';
import checkoutComplete from './Checkout/Complete';

import taxonProductsByTaxonSlug from './Taxon/ProductsByTaxonSlug';

import login from './User/Login';

export default ({customEndpoints = {}, ...config}) => ({
  cart: () => ({
    pickup: cartPickup(config),
    summary: cartSummary(config),
    addItem: cartAddItem(config)
  }),
  checkout: () => ({
    address: checkoutAddress(config),
    chooseShippingMethod: checkoutChooseShippingMethod(config),
    choosePaymentMethod: checkoutChoosePaymentMethod(config),
    availableShippingMethods: checkoutAvailableShippingMethods(config),
    availablePaymentMethods: checkoutAvailablePaymentMethods(config),
    complete: checkoutComplete(config),
  }),
  taxon: () => ({
    productsByTaxonSlug: taxonProductsByTaxonSlug(config),
  }),
  product: () => ({}),
  user: () => ({
    login: login(config),
  }),
  custom: () => mapValues(customEndpoints, (endpoint) => endpoint(config))
});
