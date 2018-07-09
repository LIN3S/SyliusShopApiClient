import axios from 'axios';
import merge from 'lodash.merge';

import session from '../session';

import {authParams, contentTypeJson, localeParams} from '../requestConfig';

export default (config) => ({notes, ...rest}) => {
  return new Promise((resolve, reject) => {
    const headers = merge(
      authParams(config),
      localeParams(config),
      contentTypeJson(config)
    );

    axios.put(
      `${config.baseUrl}/shop-api/checkout/${session(config).Cart.id()}/complete`,
      {notes, ...rest},
      headers
    )
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};
