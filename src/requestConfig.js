import session from './session';

export const channelParams = (config) => ({
  params: {
    channel: config.channel,
  }
});

export const localeParams = (config) => ({
  params: {
    locale: config.locale,
  }
});

export const authParams = (config) => {
  const userToken = session(config).User.token();

  return userToken ? {
    headers: {
      'Authorization': `Bearer ${userToken}`,
    }
  } : {};
};

export const contentTypeJson = () => ({
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json'
});

export default {
  channelParams,
  localeParams,
  authParams,
  contentTypeJson
};
