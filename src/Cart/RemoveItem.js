import axios from 'axios';
import merge from 'lodash.merge';

import Session from "../Session";
import {authParams, contentTypeJson} from '../requestConfig';

export default config => ({orderItemId}) => {
  return new Promise(resolve => {
    const headers = merge(
      authParams(config),
      contentTypeJson(config),
    );

    axios.delete(`${config.baseUrl}/shop-api/carts/${Session.Cart.id()}/items/${orderItemId}`, {}, headers)
      .then(response => resolve(response.data));
  });
};
