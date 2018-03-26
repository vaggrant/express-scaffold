module.exports = {
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || (process.env.NODE_ENV === 'production' ? 3030 : 3000),
};
