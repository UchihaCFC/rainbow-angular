(function() {
  'use strict';

  angular
    .module('rainbowAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
