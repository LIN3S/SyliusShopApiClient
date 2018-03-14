import axios from 'axios';
import merge from 'lodash.merge';

import {channelParams, localeParams} from '../requestConfig';

export default config => async ({slug}) => {
  const headers = merge(
    channelParams(config),
    localeParams(config),
  );

  const response = await axios.get(`${config.baseUrl}/shop-api/taxon-products-by-slug/${slug}`, headers);

  return response.data;
};
