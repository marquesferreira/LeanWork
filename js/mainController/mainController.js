
app.controller("controllerForm", function($scope){
$scope.nome;
$scope.email;
$scope.telefone;
$scope.cpf;



//desativa botão
$scope.botaoAtivo = false;
$scope.pessoas = [

]
$scope.incluirPessoa = function(){
    //se formulário é inválido encerra a funcão antes de salvar
    if($scope.meuFormulario.$invalid){
        return;
    }
    //adiciona Pessoa a Lista de Pessoas

    
$scope.pessoas.push = ({nome:$scope.form.nome, 
     email:$scope.form.email, 
     cpf:$scope.form.cpf,tel: $scope.form.telefone });
    console.log($scope.pessoas);


    
//zera valores do form
$scope.form = [{
    nome: '',
    email: '',
    cpf:'',
    telefone:''

}]

}

})

