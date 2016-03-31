(function() {
    'use strict';

    angular
        .module('soundCloudApi')
        .constant('IMAGE_CONFIG', {
            SIZE: {
                LRG: 't500x500',
                MD: 'crop',
                SM: 't300x300',
                BADGE: 'badge',
                MINI: 'mini',
                DEFAULT: 'large'
            },
            DEFAULT_IMG: '../assets/images/soundcloud_logo_black.png'
        });
})();
