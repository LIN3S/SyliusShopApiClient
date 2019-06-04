import axios from 'axios';
import merge from 'lodash.merge';

import session from '../session';
import {contentTypeJson} from '../requestConfig';

export default config => ({ coupon, ...rest }) =>
  new Promise((resolve, reject) => {
    const headers = merge(
      contentTypeJson(config),
    );

    axios
      .put(`${config.baseUrl}/shop-api/carts/${session(config).Cart.id()}/coupon`, {
        coupon,
        ...rest
      }, headers)
      .then(response => resolve(response.data))
      .catch(response => reject(response));
  });
