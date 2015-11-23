  myApp.controller("createCtrl", ['$scope', '$location', '$routeParams', 'Suppliers', 'AuthenticationService','$rootScope','Terms',
    function($scope, $location, $routeParams, Suppliers, AuthenticationService,$rootScope,Terms) {
    $scope.suppliers = Suppliers.query();
    $scope.pterms = Terms.query();
    $scope.sif = {};

    if ($routeParams.id != null){

     Suppliers.get({id : $routeParams.id},  function(sif){
        console.log(' Fetching a single supplier --- ' + sif.supplier_name);
        $scope.sif =  sif;
    })
     }

    $scope.cancel = function cancel() {
        $location.url('/home');
    };

    $scope.processForm = function(){
        if (!$scope.sif.supplier_name || $scope.sif.supplier_name.length < 1) return;

        $scope.sif.status = "AP Review";       
        

        if ($routeParams.id == null){
            var supplier = new Suppliers($scope.sif);
            supplier.$save(function(){
                $scope.suppliers.push(supplier);
            });
            console.log('Submitted');
            $location.url('/home');
        }else{
            Suppliers.update({id: $routeParams.id}, $scope.sif, function(){});
            $location.url('/home');
        }

    };

    $scope.save = function(){           
        if (!$scope.sif.supplier_name || $scope.sif.supplier_name.length < 1) return;
        
        $scope.sif.createdBy = $rootScope.currentUser.email;
        if ($routeParams.id == null){
            $scope.sif.status = "Saved";
            var supplier = new Suppliers($scope.sif);
                
            supplier.$save(function(){
                $scope.suppliers.push(supplier);
            });
            console.log('saved');
            console.log("ID STored" + supplier._id);
            $location.url('/home');
        } else{
            Suppliers.update({id: $routeParams.id}, $scope.sif, function(){});
            $location.url('/home');
        }
    }

    $scope.saveProceed = function(){
        console.log("Save and proceed");
        Suppliers.update({id: $routeParams.id}, $scope.sif, function(){});
        $location.url('/suppliers/ap/'+ $scope.sif._id);
    }


  }]);  

/*
   ng-click="cancel()">Cancel</button>
      <button  type="submit" class="btn btn-primary " ng-click="processForm()">Submit</button>
      <button  type="submit" class="btn btn-primary " ng-click="save()">Save</button>
    </div>
    */

           

        