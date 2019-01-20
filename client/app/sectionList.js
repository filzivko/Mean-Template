angular.module('app').component('sectionList', {
  bindings: {
    tasks: '<'
  },
  templateUrl: 'client/app/sectionList.html',
  controller: ['$http', function ($http) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.sections = [];
      $http.get('/api/sections').then(function (res) {
        $ctrl.sections = res.data;
      });
    };
  }]
});
