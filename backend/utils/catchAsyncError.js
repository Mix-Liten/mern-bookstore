import CustomError from './customError'

export function catchAsyncError(asyncFn) {
  return (req, res, next) => {
    asyncFn(req, res, next).catch(err => {
      throw new CustomError(err, 500)
    })
  }
}
