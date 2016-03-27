(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .service('tracksArtworkService', tracksArtworkService);

    function tracksArtworkService(IMAGE_CONFIG) {
        var service = {
            getArtwork: getArtwork
        };
        return service;

        function getArtwork(tracks, size) {
            _.forEach(tracks, function(track) {
                if(track.artwork_url) {
                    track.artwork_url = track.artwork_url.replace('large', size);
                } else {
                    track.artwork_url = _addDefaultImage(track.artwork_url);
                }
            });
            return tracks;
        }

        function _addDefaultImage(trackImage) {
            trackImage = IMAGE_CONFIG.DEFAULT_IMG;
            return trackImage;
        }
    }
})();
