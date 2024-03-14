export const errorHandler = (err, req, res, next) => {
  const stausCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(stausCode).json({
    success: false,
    stausCode,
    message,
  });
};
