(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .config(config);

    function config(RestangularProvider,
                    CLIENT) {
        RestangularProvider.setBaseUrl('https://api.soundcloud.com/');
        RestangularProvider.addResponseInterceptor(function(data, operation, what, url) {
            return operation.match(/get/) ? _transformData(data, url) : data;
        });

        function _transformData(data, url) {
            if(url.match(/tracks/)) {
                data = _addClientIdToStreamUrl(data);
                return data;
            }
            return data;
        }

        function _addClientIdToStreamUrl(tracks) {
            tracks = tracks.length ? tracks : [tracks];
            _.forEach(tracks, function(track) {
                track.stream_url = track.stream_url +  '?client_id=' + CLIENT.ID;
            });
            return tracks;
        }
    }
})();
