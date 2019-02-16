var app = angular.module("moduloPrincipal",[]);
// var appResultado = angular.module("moduloResultado",['indexedDB'])
var appResultado = angular.module('moduloResultado', ['indexedDB'])
      .config(function ($indexedDBProvider) {
        $indexedDBProvider
          .connection('myIndexedDB')
          .upgradeDatabase(1, function(event, db, tx){
            var objStore = db.createObjectStore('people', {keyPath: 'id'});
            objStore.createIndex('name_idx', 'nome', {unique: false});
            objStore.createIndex('email_idx', 'email', {unique: false});
            objStore.createIndex('telefone_idx', 'telefone', {unique: false});
            objStore.createIndex('cpf_idx', 'cpf', {unique: false});
          });
      });      


