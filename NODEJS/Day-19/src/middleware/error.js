export const notFound = (req, res) =>
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });

export const errorHandler = (err, _req, res, _next) => {
  console.error("Unhandled Error:", err);
  res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
};
