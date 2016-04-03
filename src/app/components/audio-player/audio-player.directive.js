(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .directive('audioPlayer', audioPlayer);

    function audioPlayer() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/components/audio-player/audio-player.html',
            replace: true,
            scope: {},
            bindToController: {
                stream: '='
            },
            controller: AudioPlayerController,
            controllerAs: 'audioVm'
        };
        return directive;
    }

    function AudioPlayerController($rootScope) {
        var vm = this, player;
        vm.isNotPlaying = false;
        vm.isNotMuted = false;
        vm.playOrPauseTrack = playOrPauseTrack;
        vm.muteOrUnmute = muteOrUnmute;

        activate();

        function activate() {
            player = _buildPlayer();
        }

        function _buildPlayer() {
            var play = new Audio();
            if(vm.stream) {
                play.src = vm.stream;
            }
            return play;
        }

        function playOrPauseTrack() {
            vm.isNotPlaying = !vm.isNotPlaying;
            if(vm.isNotPlaying) {
                player.play();
            } else {
                player.pause();
            }
        }

        function muteOrUnmute() {
            vm.isNotMuted = !vm.isNotMuted;
            if(player && player.volume > 0) {
                player.volume = 0;
            } else {
                player.volume = 1;
            }
        }

        $rootScope.$on('$stateChangeSuccess', function() {
            player.pause();
        });
    }
})();
