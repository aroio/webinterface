export const environment = {
  production: false,
  api: 'http://' +  window.location.hostname + ':8000',
  socket_api: 'ws://localhost:8000',
  cdn: 'https://cdn.stillleben.media/abacus/webinterface/',
  version: '1.0',
  defaultLocale: 'de',
  defaultPage: {
    ROLE_USER: ['de/company'],
    ROLE_ADMIN: ['de/company'],
  },
};
