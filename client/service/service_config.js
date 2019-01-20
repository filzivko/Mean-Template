angular.module('app').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('service', {
        abstract: true,
        url: ''
      })
      .state('service.index', {
        url: '/services',
        component: 'services'
      })
      .state('service.new', {
        url: '/services/new',
        component: 'service'
      })
      .state('service.edit', {
        url: '/services/:id?',
        component: 'service',
        resolve: {
          id: ['$stateParams', function ($stateParams) {
            return $stateParams.id;
          }]
        }
      });
  }]);