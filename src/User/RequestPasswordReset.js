import axios from 'axios';

import {contentTypeJson} from '../requestConfig';

export default config => data =>
  new Promise((resolve, reject) => {
    const headers = {
      ...contentTypeJson(config),
    };

    axios.put(`${config.baseUrl}/shop-api/request-password-reset`, JSON.stringify(data), headers)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
