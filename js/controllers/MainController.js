app.controller('flickrApi', function($scope, $http){
	$http.get('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=0c6c096691d870715f28b550afb36698&format=json&nojsoncallback=1').
		success(function(data, status, headers, config){
			$scope.pics = data;
			console.log(data);
		}).error(function(data, status, headers, config){
			console.log('failed' + config);
		});
});