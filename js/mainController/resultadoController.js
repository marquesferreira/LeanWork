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

$scope.pessoas =[];
var objeto =[];
//get no storage valor que acabou de passar
// var objeto = $storage.get('testKey');
// $scope.pessoas.push(angular.copy(objeto));
// console.log("objeto" + objeto);


$scope.deletarPessoa = function(Pessoa){
    for(var index in $scope.pessoas){
        var aux = $scope.pessoas[index];
        if(Pessoa == aux){
            $scope.pessoas.splice(index,1);
        }
    }
}

$scope.adicionaPessoa = function(Form){
    console.log("chamei");
    $scope.pessoas.push(Form);
    console.log(Form.nome);
    var instance = M.Modal.getInstance(elem);

instance.close();
}
}); 

