import axios from 'axios';

import Session from '../Session';

import {authParams, contentTypeJson} from '../requestConfig';

export default (config) => ({notes, ...rest}) => {
  return new Promise(resolve => {
    const headers = {
      ...contentTypeJson(config),
      ...authParams(config),
    };

    axios.put(
      `${config.baseUrl}/shop-api/checkout/${Session.Cart.id()}/complete`,
      {notes, ...rest},
      headers
    ).then(response => resolve(response.data));
  });
};
