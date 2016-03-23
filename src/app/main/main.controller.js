(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .controller('MainController', MainController);

    function MainController(tracks) {
        var vm = this;

        activate();

        function activate() {
            vm.tracks = tracks;
        }
    }
})();
