
app.controller("controllerForm", function($scope){
// $scope.nome;
// $scope.email;
// $scope.telefone;
// $scope.cpf;

//objeto pessoa
$scope.pessoa;
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
$scope.pessoas.push(pessoa);


// console.log(teste);
//zera valores do form e do escopo
delete $pessoa;
var teste = JSON.stringify($scope.pessoas);
//chama salvar local
    salvaLocal(teste);
}

//funcao para salvar local storage
function salvaLocal(teste){
localStorage.setItem('pessoasVsJSON', teste);
    redirect();
}
//funcao que redireciona
function redirect(){
    window.location.href = 'resultado.html'
}
})

