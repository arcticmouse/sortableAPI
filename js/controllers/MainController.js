app.controller('flickrApi', function($scope, flickrPics){
	$scope.pics = flickrPics.load();
})