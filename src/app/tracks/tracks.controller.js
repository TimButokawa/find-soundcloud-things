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
            vm.tracks = tracks;
            _.forEach(vm.tracks, function(track) {
                track.artwork_url = tracksArtworkService.getArtworkForTrack(track, IMAGE_CONFIG.SIZE.DEFAULT);
            });
        }

        function goToTrack(id) {
            $state.go('home.tracks.track', { trackId: id });
        }
    }
})();
