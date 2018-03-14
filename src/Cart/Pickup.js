import axios from 'axios';
import merge from 'lodash.merge';

import Session from "../Session";
import {authParams, contentTypeJson} from '../requestConfig';

export default config => () => {
  return new Promise(resolve => {
    const data = JSON.stringify({
      channel: config.channel,
    });

    const headers = merge(
      authParams(config),
      contentTypeJson(config),
    );

    axios.post(`${config.baseUrl}/shop-api/carts/${Session.Cart.generateId()}`, data, headers)
      .then(response => resolve(response.data));
  });
};
