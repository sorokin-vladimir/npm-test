const URL = {
  PROTO: 'HTTP',
  HOST: '192.168.99.103',
  PORT: 4040,
};

const {
  REACT_APP_HTTP_URL: HTTP_URL,
  REACT_APP_API_PATH: API_PATH = 'api',
  REACT_APP_API_VERSION: VERSION = 'v1',
  NODE_ENV,
} = process.env;
const URI = `${HTTP_URL || URL.HOST+':'+URL.PORT}/${API_PATH}/${VERSION}`;
const isDev = NODE_ENV === 'development';

export {
  URL,
  URI,
  NODE_ENV,
  isDev,
};
