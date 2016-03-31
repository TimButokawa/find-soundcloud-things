(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .service('tracksArtworkService', tracksArtworkService);

    function tracksArtworkService(IMAGE_CONFIG) {
        var service = {
            getArtworkForTrack: getArtworkForTrack
        };
        return service;

        function getArtworkForTrack(track, size) {
            if(track) {
                var artwork = track.artwork_url ? track.artwork_url.replace('large', size) : _addDefaultImage(track.artwork_url);
                return artwork;
            }
        }

        function _addDefaultImage(trackImage) {
            trackImage = IMAGE_CONFIG.DEFAULT_IMG;
            return trackImage;
        }
    }
})();
