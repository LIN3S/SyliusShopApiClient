import axios from 'axios';

import {contentTypeJson} from '../requestConfig';

export default config => data => {
  return new Promise((resolve, reject) => {
    const headers = {
      ...contentTypeJson(),
    };

    axios.post(`${config.baseUrl}/shop-api/login_check`, data, headers)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};
