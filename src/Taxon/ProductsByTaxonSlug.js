import axios from 'axios';
import merge from 'lodash.merge';

import {channelParams, localeParams} from '../requestConfig';

export default config => ({slug}) => {
  return new Promise(resolve => {
    const headers = merge(
      channelParams(config),
      localeParams(config),
    );

    axios.get(`${config.baseUrl}/shop-api/taxon-products-by-slug/${slug}`, headers)
      .then(response => resolve(response.data));
  });
};
