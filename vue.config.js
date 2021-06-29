module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
      '/servicestack': {
        target: 'http://localhost:62321',
        changeOrigin: true,
      },
    },
  },
};
