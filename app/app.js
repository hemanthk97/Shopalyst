(function () {
    "use strict";
    var app = angular.module('gemStore', ['chieffancypants.loadingBar', 'ngAnimate']);
    app.config(function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true;
    })
    var products = [];
    var sepProduct = [];
    var show = "";
    app.controller("StoreController", ['$scope', '$http', 'cfpLoadingBar', function ($scope, $http, cfpLoadingBar) {
        cfpLoadingBar.start();
        $http.get("http://dev.shopalyst.com/shopalyst-service/hackerearth002/1.0/products?limit=100").success(function (data) {
            $scope.products = data;
            });

        $scope.loadFeed = function (e) {
            cfpLoadingBar.start();
            $http.get("http://dev.shopalyst.com/shopalyst-service/hackerearth002/1.0/products/"+e).success(function (data) {
                $scope.sepProduct = data;
                $scope.show = "success";
                });
            cfpLoadingBar.complete();

        }
     
        this.current = 0;
        this.setCurrent = function (setCurrent) {
            this.current = setCurrent || 0;
        };
        cfpLoadingBar.complete();
    }]);

  
   
})();
