
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


      app.controller('controllerForm', function($scope, $storage){
        $scope.$storage = $storage;
        //objeto pessoa
        $scope.novaPessoa = {id:'', nome:'', email:'', telefone:'', cpf:''};
        $scope.pessoa={nome:'',email:'',telefone:'',cpf:''};
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
            delete pessoa;
            // console.log(teste);
            //zera valores do form e do escopo
         
            $storage.set('testKey', $scope.pessoas);
            
            }
          
            
            var uid= 0;
            $scope.novaPessoa.id = null;
            $scope.addPessoa = function(){
                if($scope.meuFormulario.$invalid){
                    return;
                }

                if($scope.novaPessoa.id == null){
                    uid = uid +1;
                    $scope.novaPessoa.id = uid;
                    $scope.pessoas.push($scope.novaPessoa);
                    $storage.set('testKey',$scope.pessoas);
                    
                }else{
                    for (i in $scope.pessoas){
                        if($scope.pessoas[i].id == $scope.novaPessoa.id){
            
                            $scope.pessoas[i] = $scope.novaPessoa;
                        }
                       
                    }
              
                }
                
                $scope.pessoas = [];
                $scope.pessoas = $storage.get('testKey');
                $scope.novaPessoa = null;
                redirect();
                
            }

            function redirect(){
                window.location.href = 'admin.html'
            } 
      });
// app.controller("controllerForm", function($scope){



// //objeto pessoa
// $scope.pessoa;
// //array de objetos pessoa
// $scope.pessoas = [];
// //desativa botão
// $scope.botaoAtivo = false;

// $scope.incluirPessoa = function(pessoa){
// //se formulário é inválido encerra a funcão antes de salvar
//     if($scope.meuFormulario.$invalid){
//         return;
//     }

// //adiciona Pessoa a Lista de Pessoas
// $scope.pessoas.push(pessoa);


// // console.log(teste);
// //zera valores do form e do escopo
// delete $pessoa;
// var teste = JSON.stringify($scope.pessoas);
// //chama salvar local
//     salvaLocal(teste);
// }

// //funcao para salvar local storage
// function salvaLocal(teste){
// localStorage.setItem('pessoasVsJSON', teste);
//     redirect();
// }
// //funcao que redireciona
// function redirect(){
//     window.location.href = 'resultado.html'
// }
// });

