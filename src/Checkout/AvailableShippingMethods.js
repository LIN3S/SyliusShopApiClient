import axios from 'axios';

import session from '../session';

export default config => () => {
  return new Promise(resolve => {
    axios.get(`${config.baseUrl}/shop-api/checkout/${session(config).Cart.id()}/shipping`)
      .then(response => {
        if (response.data.shipments[0].length === 0) {
          return resolve([]);
        }

        const shippingMethods = response.data.shipments[0].methods;

        resolve(Object.keys(shippingMethods).map(key => (shippingMethods[key])));
      });
  });
};
