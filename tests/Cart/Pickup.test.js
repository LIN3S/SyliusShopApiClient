import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import exampleConfig from '../exampleConfig';
import Session from '../../src/Session';

import pickup from '../../src/Cart/Pickup';

jest.mock('../../src/Session');

it('Pickup new cart', async () => {
  const mock = new MockAdapter(axios);

  Session.Cart.generateId.mockReturnValue(111);

  mock.onPost(`http://localhost/shop-api/carts/111`)
    .reply(200, {tokenValue: 111});

  expect.assertions(1);
  await expect(pickup(exampleConfig)())
    .resolves.toEqual({tokenValue: 111});
});
