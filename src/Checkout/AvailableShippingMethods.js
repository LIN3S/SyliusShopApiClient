import axios from 'axios';

import Session from '../Session';

export default config => () => {
  return new Promise(resolve => {
    axios.get(`${config.baseUrl}/shop-api/checkout/${Session.Cart.id()}/shipping`)
      .then(response => {
        const shippingMethods = response.data.shipments[0].methods;

        resolve(Object.keys(shippingMethods).map(key => (shippingMethods[key])));
      });
  });
};
