require.config({
    paths: {
        'jquery': '../lib/jquery-1.10.1.min.js',
        'waterfall': '../lib/waterfall',
        'handlebars': '../lib/handlebars-v4.0.11',
    },
    shim: {
        'waterfall': {
            deps: ['jquery'],
            exports: 'jQuery.fn.waterfall'
        }
    }
})