// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function(){                                                                   // readies the document before running jquery or javascript functions
  
  for (i= 1; i < 152; i++) {                                                                    // for loop to iterate through pokeIds in api
    $.ajax("http://pokeapi.co/api/v1/pokemon/" + i, {                                           // ajax function gets all pokemon from the API
      type: "GET",                                                                              // http action type through api
      success: function(data){                                        
        var $pokeName = data.name;                                                              // Grabs the Pokemon name from list and displays them in the ul element in the teams#new.html.erb  
        var $pokeList = $('#poke_list');                                                        // identifies the list that the data will be appended to.
        var $pokeType1 = data.types[0].name                                                     // Grabs the name for the first type that the pokemon posesses. 
        //var $pokeType2 = data.types[1].name                                                    // Grabs the name for the second type that the pokemon posesses. 

        $('<tr class= "poke-list-data">' + 
          '<td>' + $pokeName + '</td>' +
          '<td>' + $pokeType1 + '</td>' +
          // '<td>' + $pokeType1 + "," + " " + $pokeType2 + '</td>' +
          '<td>' + '<button>' + "Add" + '</button>' + '</td>' +
          '</tr>').appendTo($pokeList);                                                        // all of the html elements are being appended to the poke_list in the html. 
      }, 
      error: function(data){                                                                    
        console.log("oh-nos!");                                                                // console logs oh-nos if there is an error 
      }
    });    //$.ajax end
  }       // for loop end

});  // document.ready end  


