export function errorHandling(err, req, res, next) {
  console.log(err.message)
  res.status(err.statusCode).json({
    message: err.message,
  })
}
