/*app.factory('flickrPics', ['$resource', function($resource){
	return {
		fetchPublic: function(callback){
			var api = $resource(
				'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key:api_key=format=json&callback=?', 
				{ api_key: '0c6c096691d870715f28b550afb36698&'},
				{ fetch: {method: 'JSONP'}
			}); //end declare api

			api.fetch(function(response){ 
				callback(response.data);
			}); //end api.fetch
		}
	}
}]);