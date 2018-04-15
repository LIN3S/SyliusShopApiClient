import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import exampleConfig from '../exampleConfig';
import Session from '../../src/Session';

import removeItem from '../../src/Cart/RemoveItem';

jest.mock('../../src/Session');

it('Remove item from cart', async () => {
  const mock = new MockAdapter(axios);

  Session.Cart.id.mockReturnValue(111);

  mock.onDelete(`http://localhost/shop-api/carts/111/items/222`)
    .reply(204, {});

  expect.assertions(1);
  await expect(removeItem(exampleConfig)({orderItemId: 222}))
    .resolves.toEqual({});
});
