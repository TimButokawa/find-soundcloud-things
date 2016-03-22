(function() {
  'use strict';

  angular
    .module('soundCloudApi')
    .run(runBlock);

  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
