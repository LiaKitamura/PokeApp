// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function(){                                         // readies the document before running jquery or javascript functions

  $.ajax("http://pokeapi.co/api/v1/pokemon", {                        // ajax function gets all pokemon from the API
    type: "GET",
    success: function(data){
      var pokeNames = data.national_id                                // need help parseing the JSON response to grab needed data.
      console.log(pokeNames);                                         // Ask Brad, either Jake or possibly Dave
    }, 
    error: function(data){ 
      console.log("oh-nos!");
    }
  });    //$.ajax end

});  // document.ready end