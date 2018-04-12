import axios from 'axios';
import merge from 'lodash.merge';

import {localeParams} from '../requestConfig';

export default config => () => {
  return new Promise((resolve, reject) => {
    const headers = merge(
      localeParams(config),
    );

    axios.get(`${config.baseUrl}/shop-api/taxons/`, headers)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};
