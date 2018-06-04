export function responseClient(res, { httpCode = 200, code = 0, message = '', data = null }) {
  const responseData = {};
  responseData.success = code === 0 ? true : false;
  if (code !== 0) {
    responseData.message = `Error ${code}:${message}`;
  }
  responseData.data = data;
  res.status(httpCode).json(responseData);
}
