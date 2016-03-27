(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .service('soundCloudService', soundCloudService);

    function soundCloudService(Restangular,
                               tracksArtworkService,
                               CLIENT) {
        var service = {
            getTracks: getTracks,
            getTrack: getTrack,
            getUser: getUser
        };

        return service;

        function getTracks() {
            return Restangular.one('tracks').get({ client_id: CLIENT.ID }).then(
                function Success(data) {
                    return data.plain();
                }, function Failure(data) {
                    return data.errors;
                }
            );
        }

        function getTrack(id) {
            return Restangular.one('tracks').customGET(id, { client_id: CLIENT.ID }).then(
                function Success(data) {
                    return data.plain();
                }, function Failure(data) {
                    return data.errors;
                }
            );
        }

        function getUser(userId) {
            return Restangular.one('users').customGET(userId, { client_id: CLIENT.ID }).then(
                function Success(data) {
                    return data.plain();
                }, function Failure(data) {
                    return data.errors;
                }
            );
        }
    }
})();
