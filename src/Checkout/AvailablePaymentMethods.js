import axios from 'axios';

import Session from '../Session';

export default config => () => {
  return new Promise(resolve => {
    axios.get(`${config.baseUrl}/shop-api/checkout/${Session.Cart.id()}/payment`)
      .then(response => {
        const paymentMethods = response.data.payments[0].methods;

        resolve(Object.keys(paymentMethods).map(key => (paymentMethods[key])));
      });
  });
};
