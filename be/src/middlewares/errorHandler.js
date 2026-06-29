export default function errorHandler(err, req, res, next) {
  console.error("[Error Handler]:", err.stack || err.message);

  const status = err.status || 500;
  const message = err.message || "Terjadi kesalahan internal server.";

  res.status(status).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
}
