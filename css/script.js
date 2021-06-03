// Add your javascript here
$(function(){

    var PIZZATOPS={ 
                  "1": "Jalapeno Peppers", 
                  "2": "Kalamata Olives",  
                  "3": "Sun Dried Tomatoes",
                  "4": "Fresh Mushrooms",
                  "5": "Jin's Special"};
    
    $.each(PIZZATOPS, function(key, value) {   
       $('#pizzaTop')
           .append($("<option></option>")
                      .attr("value",key)
                      .text(value)); 
    });
    
   
  
    $('#orderDateDiv').datetimepicker({
                    sideBySide: true,
                    minDate: moment(),
                    ignoreReadonly: true
      });
     
    $("h1").animate({
      "margin-left": "100px"
    }, "slow");
    
   });