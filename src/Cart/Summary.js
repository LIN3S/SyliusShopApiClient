import axios from 'axios';

import session, {CartDoesNotExist} from "../session";

export default config => () => {
  return new Promise((resolve, reject) => {
    try {
      axios.get(`${config.baseUrl}/shop-api/carts/${session(config).Cart.id()}`)
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
