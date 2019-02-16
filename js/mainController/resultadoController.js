
appResultado.factory('$storage', function($window){
    return {
      get: function(key){
        var value = $window.localStorage[key];
        return value ? JSON.parse(value): null;
      },
      set: function(key, value){
        $window.localStorage[key] = JSON.stringify(value);
      },
      remove: function(key){
        $window.localStorage.removeItem(key);
      }
    }
  });

  appResultado.controller('resultadoController', function($scope, $storage){
    $scope.$storage = $storage;
    $storage.set('testKey', 15);
    $scope.setAnObject = function(){
      $storage.set('testKey', {foo:'bar', baz: 777});
    }
  });










/*
appResultado.controller('resultadoController', function($scope, $indexedDB){
$scope.pessoas =[];
var objeto = [];
//get no storage valor que acabou de passar
var objeto = angular.fromJson(localStorage.getItem('pessoasVsJSON'));
localStorage.clear();
console.log("objeto" + objeto);
var objetoNovo =new Array();
//seta no novo storage o objeto que recebi

$scope.pessoas.push(objeto);

$scope.pessoas = angular.fromJson($scope.pessoas);
console.log("pessoas" + $scope.pessoas);
var teste = angular.toJson($scope.pessoas);
angular.toJson(localStorage.setItem('pessoasVsJSON', $scope.pessoas));
}); 
*/


