angular.module('dt', []).filter('cat_of_type',function () {
    return function (trans, type) {
        //   console.log('type: ', type);
        return _.filter(trans, function (t) {
            // console.log('t.type: ', t, t.type, 'type', type);
            return t.type == type;
        });
    };
}).filter('cut',function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    }).filter('a_range', function () {
        return  function (items, mi, mx) {

            if (!(mx == '')) {
                mx = parseFloat(mx);
                items = _.filter(items, function (i) {
                    return i.amount <= mx;
                })
            }

            if (!(mi == '')) {
                mi = parseFloat(mi);
                items = _.filter(items, function (i) {
                    return i.amount >= mi;
                })
            }

            return items;
        }
    })

function DataTableCtrl($scope, $compile, $filter) {

    $scope.data = [];
    $scope.categories = [];
    $scope.col = 'description';
    $scope.rev = 'reverse';
    $scope.g = false;

    $.get('/api/transaction/getUserTransactions.json').success(function (data) {
        //   console.log('data: ', data);
        $scope.data = data.spData;
        $scope.update_cat();
    });

    $.get('/api/transaction/getTransactionCategories.json', function (data) {
        $scope.categories = data.spData;
        $scope.update_cat();
    });

    $scope.tim = function(){
        if ($scope.data.length && $scope.categories.length){

            $('.tt').tipTip();
            $scope.$digest();
        }
    }
    $scope.sort_col = function (c) {
        if (c == $scope.col) {
            $scope.rev = !$scope.rev;
        } else {
            $scope.col = c;
        }
    }

    $scope.grouped_data = function () {
        //@TODO: reactive sorts based on col

        return _.values(_.reduce($scope.data, function (tally, row) {
            var c = row.category;
            if (!c) {
                return tally; // skip row.
            }

            if (tally.hasOwnProperty(c.name)) {
                tally[c.name].items.push(row);
            } else {
                tally[c.name] = {
                    category:c,
                    header:c.name,
                    items:[row]
                }
            }

            return tally;

        }, {}))

    }

    $scope.summary = function(g){
        return  _.reduce(_.pluck(g.items, 'amount'), function(s, a){ return s + a}, 0);
    }

    $scope.$watch('min_amt', function (m) {
        if ((!($scope.min_amt == '')) && (!($scope.max_amt == ''))) {
            if ($scope.min_amt > $scope.max_amt) {
                $scope.max_amt = '';
            }
        }
    });
    $scope.$watch('max_amt', function (m) {
        if ((!($scope.min_amt == '')) && (!($scope.max_amt == ''))) {
            if ($scope.min_amt > $scope.max_amt) {
                $scope.min_amt = '';
            }
        }
    });

    $scope.clear_mm = function () {
        $scope.min_amt = '';
        $scope.max_amt = '';
    }

    $scope.fly_me = function (row) {
        row.flyout = 1;
        setTimeout(function () {
            var id = row.userTransactionId;
            var div_id = '#flyout-' + id;
            //  $(div_id).addClass('flyout');
            $(div_id).addClass('flyouttall', 1000)
        }, 200);
    };

    $scope.flyout_done = function (row) {
        row.flyout = 0;
    }

    $scope.min_amt = '';
    $scope.max_amt = '';

    $scope.head_style = function (base_style, col) {
        console.log(base_style, col, $scope.col);
        if (col == $scope.col) {
            return base_style + ($scope.rev ? ' cell-desc' : ' cell-asc') + ' cell-grad ';
        } else {
            return base_style + ' cell-grad ';
        }
    }

    $scope.$watch('g', function (v) {
        console.log('g: ', v)
    })

    $scope.update_cat = function () {
        if ($scope.data.length && $scope.categories.length) {
            //  console.log('refreshing');
            _.each($scope.data, function (d) {
                var c = _.find($scope.categories, function (c) {
                    // console.log('comp ', c.transactionCategoryId, d.category.transactionCategoryId);
                    return c.transactionCategoryId == d.category.transactionCategoryId;
                });

                if (c) {
                    //    console.log('found category ', c, 'for ', d);
                    d.category = c;
                    d.category_type = c.type;
                    d.category_name = c.name;
                }
            })
           $scope.tim();
        }
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


    $scope.eq = function (row, cat) {
        var ri = parseInt(row.category.transactionCategoryId);
        var ci = parseInt(cat.transactionCategoryId)
        console.log('row ', row);
        if (ri == ci)  console.log('match: ', c);
        return ri == ci;
    }
}

DataTableCtrl.$inject = ['$scope', '$compile', '$filter'];