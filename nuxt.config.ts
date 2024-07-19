export default {
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@/assets/css/main.css'
  ],

  build: {
    transpile: ['bootstrap']
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  plugins: [
    '~/plugins/pinia.js'
  ],

  head: {
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js', type: 'text/javascript' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.min.js', type: 'text/javascript' }
    ]
  },

  compatibilityDate: '2024-07-18'
};