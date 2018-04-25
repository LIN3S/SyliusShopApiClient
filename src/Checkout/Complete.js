import axios from 'axios';
import merge from 'lodash.merge';

import Session from '../Session';

import {authParams, contentTypeJson} from '../requestConfig';

export default (config) => ({notes, ...rest}) => {
  return new Promise(resolve => {
    const headers = merge(
      authParams(config),
      contentTypeJson(config)
    );

    axios.put(
      `${config.baseUrl}/shop-api/checkout/${Session.Cart.id()}/complete`,
      {notes, ...rest},
      headers
    ).then(response => resolve(response.data));
  });
};
