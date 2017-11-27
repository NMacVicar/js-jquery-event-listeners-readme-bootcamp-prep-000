//define functions here

function getIt(){
  $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIt(){
  $().on('load', function(){
    alert()
  })
}

function pressIt(){
  $().on('keydown', function(e){
    if (e.which === 71){
      alert("You have pressed g")
    }
  })
}

function submitIt(){
  $().on('submit', function(){
    alert()
  })
}


$(document).ready(function(){

// call functions here

});
