 angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
     $scope.app = "Lista Telefônica";
     //rodar node http no terminal para gerar o backend de contatos
     $scope.contatos = [];
     $scope.operadoras = [{
         nome: "OI",
         codigo: "14",
         categoria: "Telefone Celular"
     }, {
         nome: "GVT",
         codigo: "25",
         categoria: "Telefone Celular"
     }, {
         nome: "Claro",
         codigo: "15",
         categoria: "Telefone Fixo"
     }, {
         nome: "Tim",
         codigo: "18",
         categoria: "Telefone Fixo"
     }];
     //CARREGAMENTO CONTATOS - rodar node http no terminal para gerar o backend de contatos
     var carregarContatos = function () {
         $http.get("http://localhost:3412/contatos").success(function (data, status) {
             $scope.contatos = data;
         }).error(function (data, status) {
             $scope.message = "dado não carregado, :("
         });
     };
     //CARREGAMENTO DO BACKEND OPERADORAS - rodar node http no terminal para gerar o backend de operadoras
     var carregarOperadoras = function () {
         $http.get("http://localhost:3412/operadoras").success(function (data) {
             $scope.operadoras = data;
         });
     };

     //Adicionando Contatos
     // $scope.contatos.push({nome: nome, telefone: telefone}); - pode ser feito assim em combinacao com comentario da linha do button comentado $scope.contatos.push(contato); //dessa //forma, se alterar o nome ou telefone ele altera na mesma linha e não
     // adiciona nova...
     /* $scope.adicionarContato = function (contato) {
         contato.data = new Date();
         $scope.contatos.push(angular.copy(contato)); //assim ele copia e adiciona novo registro e se alterar ele cria uma novo
         delete $scope.contato; //aqui ele deleta os campos do input do adicionar novo contato depois de clicar no botao adicionar
         $scope.contatoForm.$setPristine();
     };*/

     $scope.adicionarContato = function (contato) {
         contato.data = new Date();
         $http.post("http://localhost:3412/contatos", contato).success(function (data) {
             delete $scope.contato;
             $scope.contatoForm.$setPristine();
             //$scope.contatos.push(data);
             carregarContatos();
         });
     };

     //Apagando Contatos
     $scope.apagarContatos = function (contatos) {
         $scope.contatos = contatos.filter(function (contato) {
             if (!contato.selecionado)
                 return contato;
             // aqui usa um filtro que pega os nao selecionado e retorna na tela e neste caso os selecionados nao retornam o que simula deleta-los
         });
     };
     //Disable botao remove se nenhum contato selecionado na checkbox
     $scope.isContatoSelecionado = function (contatos) {
         return contatos.some(function (contato) {
             return contato.selecionado;
         });
     };
     $scope.ordenarPor = function (campo) {
         $scope.criterioDeOrdenacao = campo;
         $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
     };
     //chamando carregamento de contatos e operadoras
     carregarContatos();
     carregarOperadoras();
 });