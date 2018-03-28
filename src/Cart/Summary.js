import axios from 'axios';

import Session, {CartDoesNotExist} from "../Session";

export default config => () => {
  return new Promise(resolve => {
    try {
      axios.get(`${config.baseUrl}/shop-api/carts/${Session.Cart.id()}`)
        .then(response => resolve(response.data));
    } catch (exception) {
      if (exception instanceof CartDoesNotExist) {
        return resolve(null);
      }

      throw exception;
    }
  });
};

