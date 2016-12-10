(function(){
'use strict'

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/home.state.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/categories.state.html',
        controller: 'CategoriesStateController',
        controllerAs: 'categoriesStateCtrl',
        resolve: {
          categories: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: "/items/{categoryShortName}",
        templateUrl: "src/menuapp/items.state.html",
        controller: 'ItemsStateController',
        controllerAs: 'itemsStateCtrl',
        resolve: {
          items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        }
      });
  };

})();
