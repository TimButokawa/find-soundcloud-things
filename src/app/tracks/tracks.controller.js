(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .controller('TracksController', TracksController);

    function TracksController($state,
                              tracks,
                              tracksArtworkService,
                              IMAGE_CONFIG) {
        var vm = this;
        vm.goToTrack = goToTrack;

        activate();

        function activate() {
            vm.tracks = tracksArtworkService.getArtwork(tracks, IMAGE_CONFIG.SIZE.LRG);
        }

        function goToTrack(id) {
            $state.go('home.tracks.track', { trackId: id });
        }
    }
})();
