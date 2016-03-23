(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .service('soundCloudService', soundCloudService);

    function soundCloudService(Restangular,
                               CLIENT) {
        var service = {
            getTracks: getTracks,
            getUser: getUser
        };

        return service;

        function getTracks() {
            Restangular.one('tracks').get({ client_id: CLIENT.ID }).then(
                function Success(data) {
                    return data.plain();
                }, function Failure(data) {
                    return data.errors;
                }
            );
        }

        function getUser(userId) {
            Restangular.one('users').customGET(userId, { client_id: CLIENT.ID }).then(
                function Success(data) {
                    return data.plain();
                }, function Failure(data) {
                    return data.errors;
                }
            );
        }
    }
})();
