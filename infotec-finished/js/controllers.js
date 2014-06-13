'use strict';

/* Controllers */

angular.module('InfotecApp.controllers', [])
  .controller('HomeController', function($scope) {
	
	//Our home page doesn't have any logic so our controller is empty
	

  //End of Home Controller
  })
  .controller('TracksController', function($scope, TrackService) {
	
	//This controller is called any time you view the #/tracks page
	
	$scope.tracks = []; //Initialize an empty Array (list) of tracks
	
	//Call the getTracks() function in our service.  This function will 
	//return the data loaded from the server
	TrackService.getTracks()
		.success(function(data){
			//If the service was successful, populate our tracks list
			$scope.tracks = data.entries;
		})
		.error(function(){
			//If the service had an error, pop up an alert box
			alert("Getting Tracks Didn't Work");
		});
	
	

  //End of Tracks Controller	
  })
  .controller('ContactController', function($scope) {
  
	//Our Contact page doesn't have any logic so our controller is empty

  //End of ContactController  
  })
  .controller('SessionsController', function($scope, $routeParams, TrackService) {
	
	//This controller is called any time you click on a track and view the 
	//sessions for that track
	
	$("input").focus(); //Focus the search field
	
	$scope.sessions = []; //Initialize a list for our sessions
	
	//Like the TrackController, we'll call getSessions() to pull the list
	//of session in the track we selected.  We pass the ID from the URL
	//to the getSessions() function so it knows what track was clicked.
	TrackService.getSessions($routeParams.id)
		.success(function(data){
			//If the service call is successful, populate the sessions list
			$scope.sessions = data.entries;
		})
		.error(function(){
			alert("Getting Sessions Didn't Work");
		});
  


  //End of Sessions Controller  
  })
  .controller('HeaderController', function($scope, $location) {
	
	//This controller has all the logic for our navigation bar
	
	
	//We need to close the "hamburger menu" that is used on mobile phones
	//when we click on a navigation item.
	//To do this, we're telling any <a> tag in the menu with an href attribute
	//containing a "#/" to close the menu
	$(".navbar-collapse li a[href^='#/']").click(function (){
		$(".collapse").collapse("hide");
	});
	
	//This function checks if a link should be active
	$scope.isActive = function(url){
		return url == $location.path();
	}

  //End of HeaderController  
  });

  
  
  
  
  
  
  
  
  