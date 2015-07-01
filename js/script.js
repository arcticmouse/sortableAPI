var app = angular.module('SortableFlickrApi', []);

app.config(function($httpProvider){
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});