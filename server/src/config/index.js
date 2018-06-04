export const version = '1.0.0';
export const host = process.env.HOST || '127.0.0.1';
export const port = process.env.PORT || (process.env.NODE_ENV === 'production' ? 3030 : 3000);
