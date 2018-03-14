import axios from 'axios';

import Session from '../Session';

import {authParams, contentTypeJson} from '../requestConfig';

export default (config) => async ({notes, ...rest}) => {
  const headers = {
    ...contentTypeJson(config),
    ...authParams(config),
  };

  const response = await axios.put(
    `${config.baseUrl}/shop-api/checkout/${Session.Cart.id()}/complete`,
    {
      notes,
      ...rest
    },
    headers
  );

  return response.data;
};
