(function(){
'use strict'

  angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('RestApiUrl', 'https://davids-restaurant.herokuapp.com/');

  MenuDataService.$inject = ['$http', 'RestApiUrl'];
  function MenuDataService($http, RestApiUrl){
    var menuDataService = this;

    menuDataService.getAllCategories = function(){
      return $http({
        method: 'GET',
        url: (RestApiUrl + 'categories.json')
      }).then(function(result){
        return result.data;
      });
    };

    menuDataService.getItemsForCategory = function(categoryShortName){
      return $http({
        method: 'GET',
        url: (RestApiUrl + 'menu_items.json'),
        params: {
          category: categoryShortName
        }
      }).then(function(result){
        return result.data;
      });
    };

  };

})();
