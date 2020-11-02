module.exports = {
  src: {
    root: './source/',
    html: './source/views/',
    scss: './source/scss/style.scss',
    js: './source/js/**/*',
    img: './source/img/**/*',
    helpers: './gulp/helpers/'
  },
  dest: {
    root: './docs/markup/',
    css: './docs/markup/css/',
    img: './docs/markup/img/',
    js: './docs/markup/js/',
    fonts: './docs/markup/fonts/'
  },
  watch: {
    html: './source/views/{layouts,partials,helpers,data}/**/*',
    scss: './source/scss/**/*',
    js: './source/js/**/*.js',
    img: './source/img/**/*',
    root: './static/',
  }
};
