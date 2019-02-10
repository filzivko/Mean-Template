angular.module('app').component('comment', {
    bindings: {
        state: '<'
    },
    templateUrl: 'client/service/comment_view.html',
    controller: [function () {
        var $ctrl = this;

        $ctrl.$onInit = function () {
            $ctrl.passedVariable = $ctrl.state;
        };
    }]
});