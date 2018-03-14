import axios from 'axios';

import Session from "../Session";
import {contentTypeJson} from '../requestConfig';

export default config => async ({paymentId, methodCode}) => {
  const headers = {
    ...contentTypeJson(config),
  };

  const response = await axios.put(
    `${config.baseUrl}/shop-api/checkout/${Session.Cart.id()}/payment/${paymentId}`,
    JSON.stringify({method: methodCode}),
    headers
  );

  return response.data;
};
