import axios from 'axios';

import session from '../session';

export default config => ({ coupon, ...rest }) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${config.baseUrl}/shop-api/carts/${session(config).Cart.id()}/coupon`, {
        coupon,
        ...rest
      })
      .then(response => resolve(response.data))
      .catch(response => reject(response));
  });
