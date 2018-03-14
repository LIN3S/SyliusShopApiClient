import Session from './Session';

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

export const authParams = () => {
  const userToken = Session.User.token();

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
