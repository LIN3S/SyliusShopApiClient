import axios from 'axios';
import merge from 'lodash.merge';

import session from "../session";
import {authParams, contentTypeJson} from '../requestConfig';

export default config => () => {
  return new Promise(resolve => {
    const data = JSON.stringify({
      channel: config.channel,
      locale: config.locale
    });

    const headers = merge(
      authParams(config),
      contentTypeJson(config),
    );

    axios.post(`${config.baseUrl}/shop-api/carts/${session(config).Cart.generateId()}`, data, headers)
      .then(response => resolve(response.data));
  });
};
