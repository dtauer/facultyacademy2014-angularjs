'use strict';

/* Directives */

/*
	Directives allow you create your own custom tags or attributes.
	For example:
		<subscribe-form></subscribe-form>
		or
		<div user-role="admin" ></div>
		
	Below is the directive for our <session-detail> tag
	
*/

angular.module('InfotecApp.directives', [])
  .directive('sessionDetail', function() {
    return{
		restrict:"E",
		templateUrl: "partials/session-detail-partial.html",
		controller: function(){
			//Directive Logic Goes here
		}
	};
  });

  
  
  
  
  
  
  
  
  
  
  