import axios from 'axios';
import merge from 'lodash.merge';

import Session from "../Session";
import {authParams, contentTypeJson} from '../requestConfig';

export default config => async () => {
  const data = JSON.stringify({
    channel: config.channel,
  });

  const headers = merge(
    authParams(config),
    contentTypeJson(config),
  );

  const response = await axios.post(`${config.baseUrl}/shop-api/carts/${Session.Cart.generateId()}`, data, headers);

  return response.data;
};
