angular.module("rtApp").controller('mainCtrl', function($scope, mainSrv) {



  $scope.getRepData = function(address) {
    mainSrv.getRepData(address)
    .then(function(response) {
      $scope.repData = response;
      $('.collapsible').collapsible();
      console.log($scope.repData)
    })
  }




})
