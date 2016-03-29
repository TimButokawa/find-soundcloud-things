(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .config(config);

    function config(RestangularProvider,
                    CLIENT) {
        RestangularProvider.setBaseUrl('https://api.soundcloud.com/');
        RestangularProvider.addResponseInterceptor(function(data, operation, what) {
            return operation.match(/get/) ? _transformData(data, what) : data;
        });

        function _transformData(data, what) {
            if(what === 'tracks') {
                data = _addClientIdToStreamUrl(data);
                return data;
            }
        }

        function _addClientIdToStreamUrl(tracks) {
            _.forEach(tracks, function(track) {
                track.stream_url = track.stream_url +  '?client_id=' + CLIENT.ID;
            });
            return tracks;
        }
    }
})();
