import axios from 'axios';

import session from "../session";
import createCart from './Pickup';
import {contentTypeJson} from '../requestConfig';

const addItem = (cartId, data, config, {resolve, reject}) => {
  const headers = {
    ...contentTypeJson(config),
  };

  axios.post(
    `${config.baseUrl}/shop-api/carts/${cartId}/items`,
    JSON.stringify(data),
    headers
  )
    .then(response => resolve(response.data))
    .catch(error => reject(error));
};

export default config => ({productCode, variantCode, quantity, ...rest}) => {
  return new Promise((resolve, reject) => {
    try {
      const cartId = session(config).Cart.id();
      addItem(cartId, {productCode, variantCode, quantity, ...rest}, config, {resolve, reject});
    } catch (exception) {
      createCart(config)().then(cart => {
        addItem(cart.tokenValue, {productCode, variantCode, quantity, ...rest}, config, {resolve, reject});
      });
    }
  });
};
