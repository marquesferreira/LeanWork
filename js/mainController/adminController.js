
app.factory('$storage', function($window){
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



app.controller('controllerAdmin', function($scope, $storage){

$scope.pessoas = [];
$scope.novaPessoa = {id:'', nome:'', email:'', telefone:'', cpf:''};
$scope.$storage = $storage;

$scope.onLoad = function(){
    console.log("onload")
    $scope.pessoas = $storage.get('testKey');
}
$scope.adicionaPessoa = function(nome,email,cpf,telefone){ 
    $scope.pessoa.nome = nome;
    $scope.pessoa.email = email;
    $scope.pessoa.cpf = cpf;
    $scope.pessoa.telefone = telefone;
    $scope.pessoas.push($scope.pessoa);
    $scope.pessoa = null;
}
var uid= 0;

$scope.novaPessoa.id = null;
console.log($scope.novaPessoa.id);
$scope.addPessoa = function(){

    if($scope.meuFormulario.$invalid){
        return;
    }
    if($scope.novaPessoa.id == null || $scope.novaPessoa.id == 0 ){
        console.log("show");
        uid = uid + 1;
        $scope.novaPessoa.id = uid;
        $scope.pessoas.push($scope.novaPessoa);
        $storage.set('testKey',$scope.pessoas);
       
    }else{
        for (i in $scope.pessoas){
            if($scope.pessoas[i].id == $scope.novaPessoa.id ){

                $scope.pessoas[i] = $scope.novaPessoa;
            }
           
        }
  
    }
    $scope.novaPessoa = null;
}
$scope.editar = function(id){
    for (i in $scope.pessoas){
        if($scope.pessoas[i].id == id ){
            $scope.novaPessoa = angular.copy($scope.pessoas[i]);
        }
    }

}

$scope.delete = function(id){
    for (i in $scope.pessoas){
        if($scope.pessoas[i].id == id ){

            $scope.pessoas.splice(i,1);
            $scope.novaPessoa = {};
        }

    }

}

});

// {nome:"edvan", email: "edivvas@"}