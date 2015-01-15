requirejs.config({
    baseUrl: 'src',
    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'text': '../bower_components/requirejs-text/text'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': ['angular'],
        'angular-resource': ['angular']
    },
    packages: [
        'modules/home'
    ],
    deps: ['app']
});
