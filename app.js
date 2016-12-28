(function () {
'use strict';

angular.module('LunchCheck' , [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.items = [];
    $scope.visible = false;
    $scope.visibleTooMuch = false;

$scope.convertToArray = function () {
    $scope.array = $scope.string.split(',');
};

$scope.checkIfTooMuch = function () {
if (!$scope.array) {
    $scope.emptyCheck = !$scope.visible;
}else if ($scope.array.length <= 3) {
    $scope.emptyCheck = false;
    $scope.visibleTooMuch = false;
    $scope.visible = !$scope.visible;
}else {
    $scope.emptyCheck = false;
    $scope.visible = false;
    $scope.visibleTooMuch = !$scope.visible;
}

};
}
})();
