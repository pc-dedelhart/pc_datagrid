angular.module('dt', []).filter('cat_of_type', function () {
    return function (trans, type) {
        console.log('type: ', type);
        return _.filter(trans, function (t) {
            console.log('t.type: ', t, t.type, 'type', type);
            return t.type == type;
        });
    };
})

function DataTableCtrl($scope, $compile, $filter) {

    $.get('/api/getUserTransactions.json').success(function (data) {
        console.log('data: ', data);
        $scope.data = data.spData;
        $scope.update_cat();
    });

    $scope.fly_me = function (row) {
        row.flyout = 1;
        setTimeout(function () {
            var id = row.userTransactionId;
            var div_id = 'flyout-' + id;

        }, 250);
    };

    $scope.flyout_done = function (row) {
        row.flyout = 0;
    }

    $scope.update_cat = function () {
        if ($scope.data.length && $scope.categories.length) {
            console.log('refreshing');
            _.each($scope.data, function (d) {
                var c = _.find($scope.categories, function (c) {
                    // console.log('comp ', c.transactionCategoryId, d.category.transactionCategoryId);
                    return c.transactionCategoryId == d.category.transactionCategoryId;
                });

                if (c) {
                    console.log('found category ', c, 'for ', d);
                    d.category = c;
                }
            })
        }
        $scope.$digest();
    };
    /*
     $scope.type_to_data = function (row) {
     if (!row){
     return;
     }
     var new_cat = _.find($scope.categories, function(c){
     return c.transactionCategoryId == row.category.transactionCategoryId;
     });
     if (new_cat){
     row.category = new_cat;
     } else {
     throw new Error('cannot find category with id of ' + row.category.transactionCategoryId);
     }
     } */

    $.get('/api/getTransactionCategories.json', function (data) {
        $scope.categories = data.spData;
        $scope.update_cat();
    });

    $scope.eq = function (row, cat) {
        var ri = parseInt(row.category.transactionCategoryId);
        var ci = parseInt(cat.transactionCategoryId)
        console.log('row ', row);
        if (ri == ci)  console.log('match: ', c);
        return ri == ci;
    }

    $scope.data = [];
    $scope.categories = [];
}

DataTableCtrl.$inject = ['$scope', '$compile', '$filter'];