import axios from 'axios';
import merge from 'lodash.merge';

import {channelParams, localeParams} from '../requestConfig';

export default config => ({slug, page = 1, limit = 10}) => {
  return new Promise((resolve, reject) => {
    const headers = merge(
      channelParams(config),
      localeParams(config),
    );

    axios.get(`${config.baseUrl}/shop-api/taxon-products-by-slug/${slug}?page=${page}&limit=${limit}`, headers)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};
