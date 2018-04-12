import axios from 'axios';
import merge from 'lodash.merge';

import {authParams, channelParams, localeParams} from '../requestConfig';

export default config => ({slug}) => {
  return new Promise((resolve, reject) => {
    const headers = merge(
      channelParams(config),
      localeParams(config),
      authParams(config),
    );

    axios.get(`${config.baseUrl}/shop-api/products-by-slug/${slug}`, headers)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};
