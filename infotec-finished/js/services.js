'use strict';

/* Services */

angular.module('InfotecApp.services', [])
	.factory('TrackService', function($http) {
		/*
		 The TrackService is responsible for retrieving data
		 from the server.  Service objects in Angular "return"
		 all the functions that can be called by Controllers.
		 
		 Below, we are returning two functions to our Controllers.
		*/
		return{
				getTracks: function(){
					/*
						This function gets all the tracks from the
						Infotec conference server and returns them
						to whoever called this function.
						
						$http.get() loads data from any URL you put
						in the get() parenthesis
					*/				
				
					//getTracks URL	
					var url = "https://event.crowdcompass.com/e/zQCMTRgHzA/query/v_activity_tracks?query[orderBy][]=sequence_number&query[orderBy][]=track_name&query[includeOnlyColumns][track_name]=track_name&query[includeOnlyColumns][track_oid]=track_oid";
					return $http.get(url);
				},
				
				getSessions: function(trackID){
					/*
						This function gets all the sessions for a
						specific track. The track's ID is passed to
						this function and sent in the URL to the 
						server.
					*/
					
					//getSessions URL
					var url = "https://event.crowdcompass.com/e/zQCMTRgHzA/query/v_activity_tracks?query[orderBy][]=start_datetime&query[orderBy][]=activity_name&query[whereEqualsAlpha][track_oid]=" + trackID + "&query[includeExtraColumns][in_minute]=MINUTE(start_datetime)&query[includeExtraColumns][in_hour]=HOUR(start_datetime)&query[includeExtraColumns][in_date]=DATE(start_datetime)&query[includeExtraColumns][in_day_of_week]=DAYOFWEEK(start_datetime)&query[includeExtraColumns][in_month]=MONTH(start_datetime)&query[includeExtraColumns][in_day]=DAY(start_datetime)";
					return $http.get(url);
				}
			}
		
	});
	
	
	
	

//getTracks URL	
//var url = "https://event.crowdcompass.com/e/zQCMTRgHzA/query/v_activity_tracks?query[orderBy][]=sequence_number&query[orderBy][]=track_name&query[includeOnlyColumns][track_name]=track_name&query[includeOnlyColumns][track_oid]=track_oid";

//getSessions URL
//var url = "https://event.crowdcompass.com/e/zQCMTRgHzA/query/v_activity_tracks?query[orderBy][]=start_datetime&query[orderBy][]=activity_name&query[whereEqualsAlpha][track_oid]=" + trackID + "&query[includeExtraColumns][in_minute]=MINUTE(start_datetime)&query[includeExtraColumns][in_hour]=HOUR(start_datetime)&query[includeExtraColumns][in_date]=DATE(start_datetime)&query[includeExtraColumns][in_day_of_week]=DAYOFWEEK(start_datetime)&query[includeExtraColumns][in_month]=MONTH(start_datetime)&query[includeExtraColumns][in_day]=DAY(start_datetime)";











