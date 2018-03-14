import axios from 'axios';

import Session from '../Session';

export default config => async () => {
  const response = await axios.get(`${config.baseUrl}/shop-api/checkout/${Session.Cart.id()}/payment`);

  const paymentMethods = response.data.payments[0].methods;

  return Object.keys(paymentMethods).map(key => (paymentMethods[key]));
};
