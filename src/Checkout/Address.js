import axios from 'axios';
import merge from 'lodash.merge';

import session from '../session';
import {authParams, contentTypeJson} from '../requestConfig';

export default config => ({shippingAddress, billingAddress = {}}) => {
  return new Promise(resolve => {
    const headers = merge(
      contentTypeJson(config),
      authParams(config)
    );

    axios.put(
      `${config.baseUrl}/shop-api/checkout/${session(config).Cart.id()}/address`,
      JSON.stringify({shippingAddress, billingAddress}),
      headers
    ).then(response => resolve(response.data));
  });
};
