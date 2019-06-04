import mapValues from 'lodash.mapvalues';

import cartPickup from './Cart/Pickup';
import cartSummary from './Cart/Summary';
import cartAddItem from './Cart/AddItem';
import cartRemoveItem from './Cart/RemoveItem';
import cartChangeItemQuantity from './Cart/ChangeItemQuantity';
import addCoupon from './Cart/AddCoupon';
import removeCoupon from './Cart/RemoveCoupon';

import checkoutAddress from './Checkout/Address';
import checkoutAvailableShippingMethods from './Checkout/AvailableShippingMethods';
import checkoutAvailablePaymentMethods from './Checkout/AvailablePaymentMethods';
import checkoutChoosePaymentMethod from './Checkout/ChoosePaymentMethod';
import checkoutChooseShippingMethod from './Checkout/ChooseShippingMethod';
import checkoutComplete from './Checkout/Complete';

import productBySlug from './Product/BySlug';

import taxonAll from './Taxon/All';
import taxonProductsByTaxonSlug from './Taxon/ProductsByTaxonSlug';

import userLogin from './User/Login';
import userMe from './User/Me';
import userRegister from './User/Register';
import userPasswordReset from './User/PasswordReset';
import userRequestPasswordReset from './User/RequestPasswordReset';

import requestConfig from './requestConfig';
import session from './session';

export {requestConfig};

export default ({customEndpoints = {}, ...config}) => ({
  Session: session(config),
  cart: {
    pickup: cartPickup(config),
    summary: cartSummary(config),
    addItem: cartAddItem(config),
    removeItem: cartRemoveItem(config),
    changeItemQuantity: cartChangeItemQuantity(config),
    addCoupon: addCoupon(config),
    removeCoupon: removeCoupon(config),
  },
  checkout: {
    address: checkoutAddress(config),
    chooseShippingMethod: checkoutChooseShippingMethod(config),
    choosePaymentMethod: checkoutChoosePaymentMethod(config),
    availableShippingMethods: checkoutAvailableShippingMethods(config),
    availablePaymentMethods: checkoutAvailablePaymentMethods(config),
    complete: checkoutComplete(config),
  },
  taxon: {
    all: taxonAll(config),
    productsByTaxonSlug: taxonProductsByTaxonSlug(config),
  },
  product: {
    bySlug: productBySlug(config),
  },
  user: {
    login: userLogin(config),
    me: userMe(config),
    register: userRegister(config),
    requestPasswordReset: userRequestPasswordReset(config),
    passwordReset: userPasswordReset(config),
  },
  custom: mapValues(customEndpoints, (endpoint) => endpoint(config))
});
