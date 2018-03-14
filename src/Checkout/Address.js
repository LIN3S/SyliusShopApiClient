import axios from 'axios';

import Session from '../Session';
import {contentTypeJson} from '../requestConfig';

export default config => async ({shippingAddress, billingAddress = {}}) => {
  const headers = {
    ...contentTypeJson(config),
  };

  const response = await axios.put(
    `${config.baseUrl}/shop-api/checkout/${Session.Cart.id()}/address`,
    JSON.stringify({shippingAddress, billingAddress}),
    headers
  );

  return response.data;
};
