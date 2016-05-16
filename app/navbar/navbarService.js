
var navbarSvc = function($http){
    this.getTabs= function(){
        return $http.get('app/data/tabs.json');
    };
    
};
angular.module('vehicleDealers')
.service('navbarService',['$http',navbarSvc])