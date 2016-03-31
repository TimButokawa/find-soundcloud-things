(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .controller('TrackController', TrackController);

    function TrackController(track,
                             tracksArtworkService,
                             IMAGE_CONFIG) {
        var vm = this;

        activate();

        function activate() {
            vm.track = track;
            vm.track.artwork_url = tracksArtworkService.getArtworkForTrack(track, IMAGE_CONFIG.SIZE.LRG);
        }
    }
})();
