module.exports = {
  // ...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Replace <spring-port> with your Spring application's port
        ws: true,
        changeOrigin: true
      },
    },
  },
  // ...
};
