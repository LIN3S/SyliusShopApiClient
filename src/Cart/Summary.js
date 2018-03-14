import axios from 'axios';

import Session, {CartDoesNotExist} from "../Session";

export default config => async () => {
  try {
    const response = await axios.get(`${config.baseUrl}/shop-api/carts/${Session.Cart.id()}`);

    return response.data;
  } catch (exception) {
    if (exception instanceof CartDoesNotExist) {
      return null;
    }

    throw exception;
  }
};

