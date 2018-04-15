import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import exampleConfig from '../exampleConfig';
import Session, {CartDoesNotExist} from '../../src/Session';

import addItem from '../../src/Cart/AddItem';

jest.mock('../../src/Session');

it('Adds items to cart', async () => {
  const mock = new MockAdapter(axios);

  Session.Cart.id.mockReturnValueOnce(222);

  mock.onPost(`http://localhost/shop-api/carts/222/items`)
    .reply(204, {});

  expect.assertions(1);
  await expect(addItem(exampleConfig)({productCode: 123, variantCode: 467, quantity: 1}))
    .resolves.toEqual({});
});

it('Generates a new cart if no cart found', async () => {
  const mock = new MockAdapter(axios);

  Session.Cart.id = jest.fn(() => {
    throw new CartDoesNotExist();
  });

  Session.Cart.generateId.mockReturnValue(111);

  mock.onPost(`http://localhost/shop-api/carts/111`)
    .reply(200, {tokenValue: 111});

  mock.onPost(`http://localhost/shop-api/carts/111/items`)
    .reply(204, {});

  expect.assertions(1);
  await expect(addItem(exampleConfig)({productCode: 123, variantCode: 467, quantity: 1}))
    .resolves.toEqual({});
});
