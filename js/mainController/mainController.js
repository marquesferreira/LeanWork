
app.controller("controllerForm", function($scope){
// $scope.nome;
// $scope.email;
// $scope.telefone;
// $scope.cpf;

//objeto pessoa
$scope.pessoa = {};
//array de objetos pessoa
$scope.pessoas = [];
//desativa botão
$scope.botaoAtivo = false;

$scope.incluirPessoa = function(pessoa){
    //se formulário é inválido encerra a funcão antes de salvar
    if($scope.meuFormulario.$invalid){
        return;
    }
    //adiciona Pessoa a Lista de Pessoas

    
$scope.pessoas.push = (angular.copy(pessoa));
console.log(angular.toJson($scope.pessoas));
var teste = [{}];
var teste = angular.toJson(pessoa);

console.log("stringify:");
console.debug(teste);
delete $pessoa;
//zera valores do form
$scope.pessoa = [{
    nome: '',
    email: '',
    cpf:'',
    telefone:''

}];

salvaLocal();
}
//fim da funcao incluir pessoa
function salvaLocal(){
// localStorage.setItem('pessoasVsJSON', JSON.stringify(($scope.pessoas)));

}

})

