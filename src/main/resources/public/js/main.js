/**
 * Created by Strus Sviatoslav on 20.06.2017.
 */
var app=angular.module("springDemo", []);

app.controller("AppCtrl", function($scope) {
    $scope.websites = [{
        iconImageUrl: '',
        id: 'stackoverflow',
        website: 'stackoverflow.com',
        title: 'Stack0verflow website',
        description: 'Stack0verflow description'
    }]
});