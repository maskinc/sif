myApp.controller("viewCtrl", ['$scope','$location','$routeParams','Suppliers',
    function ($scope, $location,$routeParams, Suppliers) {  
    
    
    Suppliers.get({id : $routeParams.id},  function(sif){
        console.log(' Fetching a single supplier --- ' + sif.supplier_name);
        $scope.sif =  sif;
    })

    console.log("View controller");

}]);

