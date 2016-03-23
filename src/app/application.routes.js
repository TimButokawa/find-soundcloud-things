(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
                url: '/tracks',
                templateUrl: 'app/main/main.html',
                controller: 'MainController as vm',
                resolve: {
                    tracks: function(soundCloudService) {
                        return soundCloudService.getTracks();
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/tracks');
    }

})();
