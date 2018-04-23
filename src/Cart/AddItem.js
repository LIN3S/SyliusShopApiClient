import axios from 'axios';

import Session from "../Session";
import createCart from './Pickup';
import {contentTypeJson} from '../requestConfig';

const addItem = (cartId, data, config, resolve) => {
  const headers = {
    ...contentTypeJson(config),
  };

  axios.post(
    `${config.baseUrl}/shop-api/carts/${cartId}/items`,
    JSON.stringify(data),
    headers
  ).then(response => resolve(response.data));
};

export default config => ({productCode, variantCode, quantity, ...rest}) => {
  return new Promise(resolve => {
    try {
      const cartId = Session.Cart.id();
      addItem(cartId, {productCode, variantCode, quantity, ...rest}, config, resolve);
    } catch (exception) {
      createCart(config)().then(cart => {
        addItem(cart.tokenValue, {productCode, variantCode, quantity, ...rest}, config, resolve);
      });
    }
  });
};
