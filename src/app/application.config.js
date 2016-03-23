(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .config(config);

    function config(RestangularProvider) {
        RestangularProvider.setBaseUrl('https://api.soundcloud.com/');
    }
})();
