(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .controller('TrackController', TrackController);

    function TrackController(track) {
        var vm = this;

        activate();

        function activate() {
            vm.track = track;
        }
    }
})();
