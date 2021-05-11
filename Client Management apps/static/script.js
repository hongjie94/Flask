


(function () {
  'use strict'
  
   // feather icon
  feather.replace();
  
  // Set current year for footer 
  $("#year").text(new Date().getFullYear());
  
  $("#closeAlert").on("click", function(e){
    $("#AlertParent").hide(1000);
  });

})()
