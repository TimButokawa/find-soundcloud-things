(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html'
            })
        ;

        $urlRouterProvider.otherwise('/');
    }

})();
