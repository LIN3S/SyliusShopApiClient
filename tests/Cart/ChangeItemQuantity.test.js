import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import exampleConfig from '../exampleConfig';
import Session from '../../src/Session';

import changeItemQuantity from '../../src/Cart/ChangeItemQuantity';

jest.mock('../../src/Session');

it('Changes item quantity of the given cart item', async () => {
  const mock = new MockAdapter(axios);

  Session.Cart.id.mockReturnValueOnce(222);

  mock.onPut(`http://localhost/shop-api/carts/222/items/333`)
    .reply(204, {});

  expect.assertions(1);
  await expect(changeItemQuantity(exampleConfig)({orderItemId: 333, quantity: 2}))
    .resolves.toEqual({});
});
