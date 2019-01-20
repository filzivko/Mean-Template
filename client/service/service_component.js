angular.module('app').component('service', {
    bindings: {
        id: '<'
    },
    templateUrl: 'client/service/service_view.html',
    controller: ['$http', function ($http) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
            $ctrl.state = $ctrl.id ? 'edit' : 'new';

            if ($ctrl.state === 'new') {
                $ctrl.service = {};
            } else {
                loadServiceData($ctrl.id);
            }
        };

        function loadServiceData(id) {
            $http({
                url: 'api/services/' + id,
                method: "GET",
                params: {}
            }).then(function (res) {
                $ctrl.service = res.data;
            });
        }
    }]
});