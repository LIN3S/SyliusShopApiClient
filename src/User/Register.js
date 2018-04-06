import axios from 'axios';

import {contentTypeJson} from '../requestConfig';

export default config => ({email, firstName, lastName, plainPassword, ...rest}) => {
  return new Promise((resolve, reject) => {
    const headers = {
      ...contentTypeJson(),
    };

    axios.post(`${config.baseUrl}/shop-api/register`, {
      email,
      firstName,
      lastName,
      plainPassword,
      channel: config.channel,
      ...rest
    }, headers)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};
