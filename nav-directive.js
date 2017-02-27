angular.module("app").directive("navDirective", function() {
    return {
        templateUrl: './nav-directive.html',
        scope: {
            test: "=test"
        }, 
        controller: function($scope) {
            $scope.test = "Hello"
        }
    }
})