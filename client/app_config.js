
angular.module('app').config(['$urlRouterProvider',
  function ($urlRouterProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      var $state = $injector.get('$state');
      return $state.go('service.index');
    });
  }
]);