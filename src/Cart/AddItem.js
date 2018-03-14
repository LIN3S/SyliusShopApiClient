import axios from 'axios';

import Session from "../Session";
import createCart from './Pickup';
import {contentTypeJson} from '../requestConfig';

export default config => async ({productCode, variantCode, quantity}) => {
  let cartId = null;

  try {
    cartId = Session.Cart.id();
  } catch (exception) {
    const cart = await createCart();
    cartId = cart.tokenValue;
  }

  const headers = {
    ...contentTypeJson(config),
  };

  const response = await axios.post(
    `${config.baseUrl}/shop-api/carts/${cartId}/items`,
    JSON.stringify({productCode, variantCode, quantity}),
    headers
  );

  return response.data;
};
