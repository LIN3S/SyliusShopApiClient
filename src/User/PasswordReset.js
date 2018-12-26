import axios from 'axios';

import {contentTypeJson} from '../requestConfig';

export default config => ({password, token}) =>
  new Promise((resolve, reject) => {
    const headers = {
      ...contentTypeJson(),
    };
    const data = {
      password: {
        first: password,
        second: password,
      }
    };

    axios.put(`${config.baseUrl}/shop-api/password-reset/${token}`, JSON.stringify(data), headers)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
