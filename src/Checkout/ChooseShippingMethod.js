import axios from 'axios';

import session from "../session";
import {contentTypeJson} from '../requestConfig';

export default config => ({shipmentId, methodCode}) => {
  return new Promise(resolve => {
    const headers = {
      ...contentTypeJson(config),
    };

    axios.put(
      `${config.baseUrl}/shop-api/checkout/${session(config).Cart.id()}/shipping/${shipmentId}`,
      JSON.stringify({method: methodCode}),
      headers
    ).then(response => resolve(response.data));
  });
};
