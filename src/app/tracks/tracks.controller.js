(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .controller('TracksController', TracksController);

    function TracksController($state, tracks) {
        var vm = this;
        vm.goToTrack = goToTrack;

        activate();

        function activate() {
            vm.tracks = tracks;
        }

        function goToTrack(id) {
            $state.go('home.tracks.track', { trackId: id });
        }
    }
})();
