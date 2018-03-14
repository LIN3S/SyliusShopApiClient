import axios from 'axios';

import Session from '../Session';

export default config => async () => {
  const response = await axios.get(`${config.baseUrl}/shop-api/checkout/${Session.Cart.id()}/shipping`);

  const shippingMethods = response.data.shipments[0].methods;

  return Object.keys(shippingMethods).map(key => (shippingMethods[key]));
};
