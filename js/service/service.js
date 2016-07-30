var app = angular.module('serviceApp');

function ItemService() {
    var items = [
        {id: 1, label: 'Item 0'},
        {id: 2, label: 'Item 1'}
    ];

    this.list = function () {
        return items;
    };

    this.add = function (item) {
        items.push(item);
    };
}

app.service('ItemService',[ItemService]);