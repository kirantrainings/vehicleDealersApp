
//
var mainCtrlFn = function($scope,navbarService){
   $scope.brandName='CGI';
   /* $scope.loadContent=function(contentTye){
      if(contentTye=='login')
        {
         $scope.contentTemplate='app/login/login.tpl.html';
            
        }
        if(contentTye=='register'){
            
           $scope.contentTemplate='app/register/register.tpl.html'; 
        }
    };*/
    
    $scope.loadContent= function(tab){
        $scope.contentTemplate = tab.templateUrl;
    }
    
    navbarService.getTabs()
        .success(function(response){
        console.log(response);
        $scope.tabs= response.tabs;
        
    }).error(function(errorResponse){
        console.log(response);
        
    })
};
angular.module('vehicleDealers')
.controller('mainCtrl',['$scope','navbarService',mainCtrlFn])