(function(){
  'use strict'

  angular.module('MenuApp')
    .controller('ItemsStateController', ItemsStateController);

  ItemsStateController.$inject = ['items'];
  function ItemsStateController(items){
    var itemsStateCtrl = this;
    itemsStateCtrl.category = items.category;
    itemsStateCtrl.items = items.menu_items;
    console.log("Items", items);
  };

})();
