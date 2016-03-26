(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'app/main/main.html',
                abstract: true
            })
            .state('home.tracks', {
                url: '/tracks',
                views: {
                    "main": {
                        templateUrl: 'app/tracks/tracks.html',
                        controller: 'TracksController as vm'
                    }
                },
                resolve: {
                    tracks: function(soundCloudService) {
                        return soundCloudService.getTracks();
                    }
                }
            })
            .state('home.tracks.track', {
                url: '/:trackId',
                views: {
                    "main@home": {
                        templateUrl: 'app/tracks/track.html',
                        controller: 'TrackController as vm'
                    }
                },
                resolve: {
                    track: function($stateParams, soundCloudService) {
                        return soundCloudService.getTrack($stateParams.trackId);
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/tracks');
    }

})();
