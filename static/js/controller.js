angular.module('dt', []).filter('foo', function () {
    return function (trans, type) {
        console.log('type: ', type);
        return _.filter(trans, function (t) {
            console.log('t.type: ', t, t.type, 'type', type);
            return t.type == type;
        });
    };
});

function DataTableCtrl($scope, $compile, $filter) {

    $.get('/api/getUserTransactions.json').success( function (data){
        console.log('data: ', data);
        $scope.data = data.spData;
       $scope.type_to_data();
    });

    $scope.type_to_data = function(d){
        function ttd(d){
            cat = _.any($scope.categories, function(c){
                return
            })
            d.cat_type= cat;
            console.log('updated row: ', d);
        }
        if (d) {
             ttd(d);
            $scope.$digest();
            return;
        }

        _.each($scope.data,ttd)
        $scope.$digest()
    }

    $scope.fly_me = function (row) {
        row.flyout = 1;
    };

    $scope.flyout_done = function(row){
        row.flyout = 0;
        $scope.type_to_data(row);
    }


    $.get('/api/getTransactionCategories.json', function(data){
        console.log('choose_trans: (', a, b, c, ')');
    });

    $scope.eq = function(row, cat){
        return parseInt(row.category.transactionCategoryId) == parseInt(cat.transactionCategoryId);
    }
    /*
    $scope.data = [

        {
            "cusipNumber":"",
            "netCost":0.0,
            "symbol":"",
            "memo":"",
            "merchant":"",
            "status":"posted",
            "categoryId":0,
            "checkNumber":"",
            "holdingType":"",
            "type":{
                "includeInCashManager":true,
                "name":"Debit",
                "investmentGroup":"NA",
                "creditOrDebit":"DEBIT"
            },
            "transactionDate":1342940400000,
            "currency":"USD",
            "runningBalance":0.0,
            "amount":30.65,
            "lotHandling":"",
            "catKeyword":"Platepass",
            "simpleDescription":"",
            "category":{
                "transactionCategoryId":3,
                "name":"Automotive Expenses",
                "yodleeMetadata":{
                    "localizedCategoryName":"Automotive Expenses",
                    "isHidden":"false",
                    "categoryLevelId":"3",
                    "isBudgetable":"1"
                },
                "type":"EXPENSE"
            },
            "price":0.0,
            "description":"Platepass Hertz Tolls 8774114300 Az",
            "resultType":"aggregated",
            "userAccountId":13066,
            "userTransactionId":1367446
        },
        {
            "cusipNumber":"",
            "netCost":0.0,
            "symbol":"",
            "memo":"",
            "merchant":"",
            "status":"posted",
            "categoryId":0,
            "checkNumber":"",
            "holdingType":"",
            "type":{
                "includeInCashManager":true,
                "name":"Credit",
                "investmentGroup":"NA",
                "creditOrDebit":"CREDIT"
            },
            "transactionDate":1342594800000,
            "currency":"USD",
            "runningBalance":0.0,
            "amount":2450.0,
            "lotHandling":"",
            "catKeyword":"Payment",
            "simpleDescription":"",
            "category":{
                "transactionCategoryId":51,
                "name":"Credit Card Payments",
                "yodleeMetadata":{
                    "localizedCategoryName":"Credit Card Payments",
                    "isHidden":"false",
                    "categoryLevelId":"3",
                    "isBudgetable":"1"
                },
                "type":"TRANSFER"
            },
            "price":0.0,
            "description":"Payment",
            "resultType":"aggregated",
            "userAccountId":13066,
            "userTransactionId":1367447
        },
        {
            "cusipNumber":"",
            "netCost":0.0,
            "symbol":"",
            "memo":"",
            "merchant":"",
            "status":"posted",
            "categoryId":0,
            "checkNumber":"",
            "holdingType":"",
            "type":{
                "includeInCashManager":true,
                "name":"Credit",
                "investmentGroup":"NA",
                "creditOrDebit":"CREDIT"
            },
            "transactionDate":1342594800000,
            "currency":"USD",
            "runningBalance":0.0,
            "amount":2450.0,
            "lotHandling":"",
            "catKeyword":"Payment",
            "simpleDescription":"",
            "category":{
                "transactionCategoryId":51,
                "name":"Credit Card Payments",
                "yodleeMetadata":{
                    "localizedCategoryName":"Credit Card Payments",
                    "isHidden":"false",
                    "categoryLevelId":"3",
                    "isBudgetable":"1"
                },
                "type":"TRANSFER"
            },
            "price":0.0,
            "description":"Payment",
            "resultType":"aggregated",
            "userAccountId":13066,
            "userTransactionId":1362420
        },
        {
            "cusipNumber":"",
            "netCost":0.0,
            "symbol":"",
            "memo":"",
            "merchant":"Interest",
            "status":"posted",
            "categoryId":0,
            "userValues":{
                "description":"Interest"
            },
            "checkNumber":"",
            "holdingType":"",
            "type":{
                "includeInCashManager":true,
                "name":"Interest Income",
                "investmentGroup":"INTEREST",
                "creditOrDebit":"CREDIT",
                "investmentGroupName":"Interest"
            },
            "transactionDate":1347606000000,
            "currency":"USD",
            "runningBalance":0.0,
            "amount":0.89,
            "lotHandling":"",
            "catKeyword":"Interest",
            "simpleDescription":"Interest",
            "category":{
                "transactionCategoryId":44,
                "name":"Interest",
                "yodleeMetadata":{
                    "localizedCategoryName":"Interest",
                    "isHidden":"false",
                    "categoryLevelId":"3",
                    "isBudgetable":"1"
                },
                "type":"INCOME"
            },
            "price":0.0,
            "description":"Interest Earned",
            "resultType":"aggregated",
            "userAccountId":12241,
            "userTransactionId":1598995
        },
        {
            "cusipNumber":"",
            "netCost":0.0,
            "symbol":"",
            "memo":"",
            "merchant":"",
            "status":"posted",
            "categoryId":0,
            "checkNumber":"",
            "holdingType":"",
            "type":{
                "includeInCashManager":true,
                "name":"Credit",
                "investmentGroup":"NA",
                "creditOrDebit":"CREDIT"
            },
            "transactionDate":1345186800000,
            "currency":"USD",
            "runningBalance":0.0,
            "amount":0.99,
            "lotHandling":"",
            "catKeyword":"Interest",
            "simpleDescription":"",
            "category":{
                "transactionCategoryId":44,
                "name":"Interest",
                "yodleeMetadata":{
                    "localizedCategoryName":"Interest",
                    "isHidden":"false",
                    "categoryLevelId":"3",
                    "isBudgetable":"1"
                },
                "type":"INCOME"
            },
            "price":0.0,
            "description":"Interest Earned",
            "resultType":"aggregated",
            "userAccountId":12241,
            "userTransactionId":1443688
        },
        {
            "cusipNumber":"",
            "netCost":0.0,
            "symbol":"",
            "memo":"",
            "merchant":"",
            "status":"posted",
            "categoryId":0,
            "checkNumber":"",
            "holdingType":"",
            "type":{
                "includeInCashManager":true,
                "name":"Credit",
                "investmentGroup":"NA",
                "creditOrDebit":"CREDIT"
            },
            "transactionDate":1342508400000,
            "currency":"USD",
            "runningBalance":0.0,
            "amount":1.23,
            "lotHandling":"",
            "catKeyword":"Interest",
            "simpleDescription":"",
            "category":{
                "transactionCategoryId":44,
                "name":"Interest",
                "yodleeMetadata":{
                    "localizedCategoryName":"Interest",
                    "isHidden":"false",
                    "categoryLevelId":"3",
                    "isBudgetable":"1"
                },
                "type":"INCOME"
            },
            "price":0.0,
            "description":"Interest Earned",
            "resultType":"aggregated",
            "userAccountId":12241,
            "userTransactionId":1357714
        }
    ]; */

    $scope.categories = [
        {
            "transactionCategoryId":1,
            "name":"ATM/Cash Withdrawals",
            "yodleeMetadata":{
                "localizedCategoryName":"ATM/Cash Withdrawals",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":2,
            "name":"Advertising",
            "yodleeMetadata":{
                "localizedCategoryName":"Advertising",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":3,
            "name":"Automotive Expenses",
            "yodleeMetadata":{
                "localizedCategoryName":"Automotive Expenses",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":4,
            "name":"Business Miscellaneous",
            "yodleeMetadata":{
                "localizedCategoryName":"Business Miscellaneous",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":5,
            "name":"Cable/Satellite Services",
            "yodleeMetadata":{
                "localizedCategoryName":"Cable/Satellite Services",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":6,
            "name":"Charitable Giving",
            "yodleeMetadata":{
                "localizedCategoryName":"Charitable Giving",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":7,
            "name":"Checks",
            "yodleeMetadata":{
                "localizedCategoryName":"Checks",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"0"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":8,
            "name":"Child/Dependent Expenses",
            "yodleeMetadata":{
                "localizedCategoryName":"Child/Dependent Expenses",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":9,
            "name":"Clothing/Shoes",
            "yodleeMetadata":{
                "localizedCategoryName":"Clothing/Shoes",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":10,
            "name":"Dues and Subscriptions",
            "yodleeMetadata":{
                "localizedCategoryName":"Dues and Subscriptions",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":11,
            "name":"Education",
            "yodleeMetadata":{
                "localizedCategoryName":"Education",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":12,
            "name":"Electronics",
            "yodleeMetadata":{
                "localizedCategoryName":"Electronics",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":13,
            "name":"Entertainment",
            "yodleeMetadata":{
                "localizedCategoryName":"Entertainment",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":14,
            "name":"Gasoline/Fuel",
            "yodleeMetadata":{
                "localizedCategoryName":"Gasoline/Fuel",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":15,
            "name":"General Merchandise",
            "yodleeMetadata":{
                "localizedCategoryName":"General Merchandise",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":16,
            "name":"Gifts",
            "yodleeMetadata":{
                "localizedCategoryName":"Gifts",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":17,
            "name":"Groceries",
            "yodleeMetadata":{
                "localizedCategoryName":"Groceries",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":18,
            "name":"Healthcare/Medical",
            "yodleeMetadata":{
                "localizedCategoryName":"Healthcare/Medical",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":19,
            "name":"Hobbies",
            "yodleeMetadata":{
                "localizedCategoryName":"Hobbies",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":20,
            "name":"Home Improvement",
            "yodleeMetadata":{
                "localizedCategoryName":"Home Improvement",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":21,
            "name":"Home Maintenance",
            "yodleeMetadata":{
                "localizedCategoryName":"Home Maintenance",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":22,
            "name":"Insurance",
            "yodleeMetadata":{
                "localizedCategoryName":"Insurance",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":23,
            "name":"Loans",
            "yodleeMetadata":{
                "localizedCategoryName":"Loans",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":24,
            "name":"Mortgages",
            "yodleeMetadata":{
                "localizedCategoryName":"Mortgages",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":25,
            "name":"Office Maintenance",
            "yodleeMetadata":{
                "localizedCategoryName":"Office Maintenance",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":26,
            "name":"Office Supplies",
            "yodleeMetadata":{
                "localizedCategoryName":"Office Supplies",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":27,
            "name":"Online Services",
            "yodleeMetadata":{
                "localizedCategoryName":"Online Services",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":28,
            "name":"Other Bills",
            "yodleeMetadata":{
                "localizedCategoryName":"Other Bills",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":29,
            "name":"Other Expenses",
            "yodleeMetadata":{
                "localizedCategoryName":"Other Expenses",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":30,
            "name":"Personal Care",
            "yodleeMetadata":{
                "localizedCategoryName":"Personal Care",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":31,
            "name":"Pets/Pet Care",
            "yodleeMetadata":{
                "localizedCategoryName":"Pets/Pet Care",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":32,
            "name":"Postage and Shipping",
            "yodleeMetadata":{
                "localizedCategoryName":"Postage and Shipping",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":33,
            "name":"Printing",
            "yodleeMetadata":{
                "localizedCategoryName":"Printing",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":34,
            "name":"Rent",
            "yodleeMetadata":{
                "localizedCategoryName":"Rent",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":35,
            "name":"Restaurants/Dining",
            "yodleeMetadata":{
                "localizedCategoryName":"Restaurants/Dining",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":36,
            "name":"Service Charges/Fees",
            "yodleeMetadata":{
                "localizedCategoryName":"Service Charges/Fees",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":37,
            "name":"Taxes",
            "yodleeMetadata":{
                "localizedCategoryName":"Taxes",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":38,
            "name":"Telephone Services",
            "yodleeMetadata":{
                "localizedCategoryName":"Telephone Services",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":39,
            "name":"Travel",
            "yodleeMetadata":{
                "localizedCategoryName":"Travel",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":40,
            "name":"Utilities",
            "yodleeMetadata":{
                "localizedCategoryName":"Utilities",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":41,
            "name":"Wages Paid",
            "yodleeMetadata":{
                "localizedCategoryName":"Wages Paid",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"EXPENSE"
        },
        {
            "transactionCategoryId":42,
            "name":"Consulting",
            "yodleeMetadata":{
                "localizedCategoryName":"Consulting",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"INCOME"
        },
        {
            "transactionCategoryId":43,
            "name":"Deposits",
            "yodleeMetadata":{
                "localizedCategoryName":"Deposits",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"INCOME"
        },
        {
            "transactionCategoryId":44,
            "name":"Interest",
            "yodleeMetadata":{
                "localizedCategoryName":"Interest",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"INCOME"
        },
        {
            "transactionCategoryId":45,
            "name":"Investment Income",
            "yodleeMetadata":{
                "localizedCategoryName":"Investment Income",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"INCOME"
        },
        {
            "transactionCategoryId":46,
            "name":"Other Income",
            "yodleeMetadata":{
                "localizedCategoryName":"Other Income",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"INCOME"
        },
        {
            "transactionCategoryId":47,
            "name":"Paychecks/Salary",
            "yodleeMetadata":{
                "localizedCategoryName":"Paychecks/Salary",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"INCOME"
        },
        {
            "transactionCategoryId":48,
            "name":"Retirement Income",
            "yodleeMetadata":{
                "localizedCategoryName":"Retirement Income",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"INCOME"
        },
        {
            "transactionCategoryId":49,
            "name":"Sales",
            "yodleeMetadata":{
                "localizedCategoryName":"Sales",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"INCOME"
        },
        {
            "transactionCategoryId":50,
            "name":"Services",
            "yodleeMetadata":{
                "localizedCategoryName":"Services",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"INCOME"
        },
        {
            "transactionCategoryId":51,
            "name":"Credit Card Payments",
            "yodleeMetadata":{
                "localizedCategoryName":"Credit Card Payments",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"TRANSFER"
        },
        {
            "transactionCategoryId":52,
            "name":"Savings",
            "yodleeMetadata":{
                "localizedCategoryName":"Savings",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"TRANSFER"
        },
        {
            "transactionCategoryId":53,
            "name":"Securities Trades",
            "yodleeMetadata":{
                "localizedCategoryName":"Securities Trades",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"TRANSFER"
        },
        {
            "transactionCategoryId":54,
            "name":"Transfers",
            "yodleeMetadata":{
                "localizedCategoryName":"Transfers",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"TRANSFER"
        },
        {
            "transactionCategoryId":55,
            "name":"Retirement Contributions",
            "yodleeMetadata":{
                "localizedCategoryName":"Retirement Contributions",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"1"
            },
            "type":"DEFERRED_COMPENSATION"
        },
        {
            "transactionCategoryId":56,
            "name":"Uncategorized",
            "yodleeMetadata":{
                "localizedCategoryName":"Uncategorized",
                "isHidden":"false",
                "categoryLevelId":"3",
                "isBudgetable":"0"
            },
            "type":"UNCATEGORIZED"
        },
        {
            "transactionCategoryId":57,
            "name":"Expense Reimbursement",
            "yodleeMetadata":{
                "isHidden":"false",
                "isBudgetable":"1",
                "categoryLevelId":"3"
            },
            "type":"INCOME"
        },
        {
            "transactionCategoryId":58,
            "name":"Expense Reimbursement",
            "yodleeMetadata":{
                "isHidden":"false",
                "isBudgetable":"1",
                "categoryLevelId":"3"
            },
            "type":"INCOME"
        }
    ];
}

DataTableCtrl.$inject = ['$scope', '$compile', '$filter'];