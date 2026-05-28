export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  const status = err.status || 500;
  const message = err.message || 'Error interno del servidor';
  
  res.status(status).json({
    success: false,
    error: {
      status,
      message,
      timestamp: new Date().toISOString()
    }
  });
};

export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    error: {
      status: 404,
      message: 'Endpoint no encontrado',
      path: req.path
    }
  });
};
