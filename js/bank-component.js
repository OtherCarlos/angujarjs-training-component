function BankComponent($scope) {
    
    var ctrl = this;
    // Este método lo invoca el binding output accountSelected
    // desde el html
    $scope.executeOutput = () => {
        return { accountId: ctrl.account ? ctrl.account.id : '' };
    };
}

app.component('bankComponent', {
    templateUrl: 'bank-component.html',
    bindings: {
        // binding de entrada account identificado con <
        account: '<',
        // binding de salida accountSelected (account-selected) con &
        accountSelected: '&'
    },
    controller: BankComponent
});