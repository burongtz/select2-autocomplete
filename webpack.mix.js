let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/js/select2-autocomplete.js', 'dist/js')
   .setPublicPath('dist');

mix.webpackConfig({
    output: {
        library: 'select2-autocomplete',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
});