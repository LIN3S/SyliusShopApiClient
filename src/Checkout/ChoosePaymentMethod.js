import axios from 'axios';

import Session from "../Session";
import {contentTypeJson} from '../requestConfig';

export default config => ({paymentId, methodCode}) => {
  return new Promise(resolve => {
    const headers = {
      ...contentTypeJson(config),
    };

    axios.put(
      `${config.baseUrl}/shop-api/checkout/${Session.Cart.id()}/payment/${paymentId}`,
      JSON.stringify({method: methodCode}),
      headers
    ).then(response => resolve(response.data));
  });
};
