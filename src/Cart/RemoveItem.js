import axios from 'axios';
import merge from 'lodash.merge';

import session from "../session";
import {authParams, contentTypeJson} from '../requestConfig';

export default config => ({orderItemId}) => {
  return new Promise(resolve => {
    const headers = merge(
      authParams(config),
      contentTypeJson(config),
    );

    axios.delete(`${config.baseUrl}/shop-api/carts/${session(config).Cart.id()}/items/${orderItemId}`, {}, headers)
      .then(response => resolve(response.data));
  });
};
