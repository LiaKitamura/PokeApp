// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function(){                                         // readies the document before running jquery or javascript functions
  for (i= 1; i < 152; i++) {                                          // for loop to iterate through pokeIds in api
    $.ajax("http://pokeapi.co/api/v1/pokemon/" + i, {                 // ajax function gets all pokemon from the API
      type: "GET",                                                    // http action type through api
      success: function(data){                                        
        var $pokeName = data.name                                      // read Json object data and finds each pokemon name  
        var $list = $('#poke_list');
        $list.appendTo('<li>' + $pokeName + '</li>');
        console.log($pokeName);
      }, 
      error: function(data){ 
        console.log("oh-nos!");
      }
    });    //$.ajax end
  }
});  // document.ready end


