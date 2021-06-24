var app = angular.module('AppModule', [])
app.controller('BankController', function ($scope) {
    $scope.accounts = [
        {
            id: '100000',
            name: 'Cuenta de ahorro',
            maskedNumber: '100-000-0000-1',
            type: 'saving'
        },
        {
            id: '100001',
            name: 'Cuenta corriente',
            maskedNumber: '100-000-0000-2',
            type: 'current'
        },
        {
            id: '100002',
            name: 'Prestamo',
            maskedNumber: '100000-00000-1',
            type: 'loan'
        }
    ];
    $scope.selectedAccount = "Ninguno";

    // Este método se ejecuta cuando el output del component
    // se ejecuta
    $scope.userSelectAnAccount = function(accountId) {
        $scope.selectedAccount = accountId;
    };
});