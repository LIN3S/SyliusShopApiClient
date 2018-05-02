import axios from 'axios';

import Session, {CartDoesNotExist} from "../Session";

export default config => () => {
  return new Promise((resolve, reject) => {
    try {
      axios.get(`${config.baseUrl}/shop-api/carts/${Session.Cart.id()}`)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    } catch (exception) {
      if (exception instanceof CartDoesNotExist) {
        return resolve(null);
      }

      throw exception;
    }
  });
};
