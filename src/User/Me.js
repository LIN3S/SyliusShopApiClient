import axios from 'axios';

import {authParams} from '../requestConfig';

export default config => () => {
  return new Promise((resolve, reject) => {
    const headers = {
      ...authParams(config),
    };

    axios.get(`${config.baseUrl}/shop-api/me`, headers)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};
