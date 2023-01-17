module.exports=(_error, _req, _res, _next) => {
  const error = {
    code: _error.code || 400,
    message: _error.message || "Unknown error",
  };

  console.log('==== Api Error Response: ', error);

  return _res
    .status(200)
    .json(error)
    .end();
}