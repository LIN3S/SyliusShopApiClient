import uuid from 'uuid';
import cookie from 'react-cookies';

const CART_TOKEN_COOKIE = 'cart-session-id';
const USER_TOKEN_COOKIE = 'user-token';

const setCookie = ({name, value = '', expiration, domain, path = '/'} = {}) => {
  let expires;

  if (expiration) {
    const cookieDate = new Date();
    cookieDate.setTime(cookieDate.getTime() + expiration);

    expires = cookieDate;
  }

  cookie.save(name, value, {
    path,
    expires,
    domain
  });
};
const getCookie = name => cookie.load(name);
const removeCookie = (name, {domain, path = '/'} = {}) => cookie.remove(name, {domain, path});

export class CartDoesNotExist {
  message = 'Cart has not been initialized';
}

const Session = {
  Cart: {
    id: () => {
      const id = getCookie(CART_TOKEN_COOKIE);

      if (typeof id === 'undefined') {
        throw new CartDoesNotExist();
      }

      return id;
    },
    generateId: () => {
      const newSessionId = uuid();

      setCookie({
        name: CART_TOKEN_COOKIE,
        value: newSessionId,
        expiration: 604800000 // 7days
      });

      return newSessionId;
    },
    remove: () => removeCookie(CART_TOKEN_COOKIE)
  },
  User: {
    token: () => getCookie(USER_TOKEN_COOKIE),
    set: (token) => setCookie({name: USER_TOKEN_COOKIE, value: token}),
    remove: () => removeCookie(USER_TOKEN_COOKIE)
  }
};

export default Session;
