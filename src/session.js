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

const session = config => {
  const cartTokenCookie = config.cartTokenCookie || CART_TOKEN_COOKIE;

  return ({
    Cart: {
      id: () => {
        const id = getCookie(cartTokenCookie);

        if (typeof id === 'undefined') {
          throw new CartDoesNotExist();
        }

        return id;
      },
      generateId: () => {
        const newSessionId = uuid();
        const params = {
          name: cartTokenCookie,
          value: newSessionId,
          expiration: config.cartCookieExpiration || 604800000 // 7 days
        };

        if (config.cookieDomain) {
          params.domain = config.cookieDomain;
        }

        setCookie(params);

        return newSessionId;
      },
      remove: () => {
        const params = {};

        if (config.cookieDomain) {
          params.domain = config.cookieDomain;
        }

        return removeCookie(cartTokenCookie, params);
      }
    },
    User: {
      token: () => getCookie(USER_TOKEN_COOKIE),
      set: (token) => {
        const params = {
          name: USER_TOKEN_COOKIE,
          value: token,
          expiration: config.userCookieExpiration || 2592000000 // 1 month
        };

        if (config.cookieDomain) {
          params.domain = config.cookieDomain;
        }

        setCookie(params);
      },
      remove: () => {
        const params = {};

        if (config.cookieDomain) {
          params.domain = config.cookieDomain;
        }

        return removeCookie(USER_TOKEN_COOKIE, params);
      }
    }
  });
};

export default session;
