const userInput = $(".userinput")
const dayInput = $("#day");
const monthInput = $("#month");
const yearInput = $("#year");
const dayError = $("#dayerror");
const monthError = $("#montherror");
const yearError = $("#yearerror");
const label = $(".label");
const push = $("#submit");

 
    const bayi = new Date();
    const odun = bayi.getFullYear();

let validator = true;
 
 function validate() {
    
 if ( dayInput.val() > 31) {
         dayError.text("Must be a valid day");
         label.css("color","hsl(0, 100%, 67%)");
         userInput.css("border-color","hsl(0, 100%, 67%)");
         validator = false;
        }     

   else if( dayInput.val().length > 2) {
         dayError.text("Must be a valid day");
         label.css("color","hsl(0, 100%, 67%)");
         userInput.css("border-color","hsl(0, 100%, 67%)");
         validator = false;
        } 

   else if( dayInput.val().length === 0) {
         dayError.text("This field is required");
         label.css("color","hsl(0, 100%, 67%)");
         userInput.css("border-color","hsl(0, 100%, 67%)");
        validator = false;
        } 
   

   else if( dayInput.val() < 1) {
         dayError.text("Must be a valid day");
         label.css("color","hsl(0, 100%, 67%)");
         userInput.css("border-color","hsl(0, 100%, 67%)");
         validate = false;
        }
         else  {
        dayError.text("");
        userInput.css("border-color","hsl(0, 0%, 86%)");
        label.css("color","hsl(0, 1%, 44%)");
         validator = true;
}
   if( monthInput.val().length === 0) {
         monthError.text("This field is required");
         label.css("color","hsl(0, 100%, 67%)");
         userInput.css("border-color","hsl(0, 100%, 67%)");
         validator = false;
}

 else if( monthInput.val().length > 2) {
         monthError.text("Must be a valid month");
         label.css("color","hsl(0, 100%, 67%)");
         userInput.css("border-color","hsl(0, 100%, 67%)");
          validator = false;
        } 

          else if( monthInput.val() > 12) {
         monthError.text("Must be a valid month");
         label.css("color","hsl(0, 100%, 67%)");
         userInput.css("border-color","hsl(0, 100%, 67%)");
         validator = false;
        }

           else if( monthInput.val() < 1) {
         monthError.text("Must be a valid month");
         label.css("color","hsl(0, 100%, 67%)");
         userInput.css("border-color","hsl(0, 100%, 67%)");
          validator = false;
    
        }  else  {
        monthError.text("");
        userInput.css("border-color","hsl(0, 0%, 86%)");
        label.css("color","hsl(0, 1%, 44%)");
         validator = true;
}

          if( yearInput.val().length === 0) {
         yearError.text("This field is required");
         label.css("color","hsl(0, 100%, 67%)");
         userInput.css("border-color","hsl(0, 100%, 67%)");
          validator = false;

        } 

        

   else if( yearInput.val().length > 4 || yearInput.val().length < 4) {
         yearError.text("Must be a valid year");
         label.css("color","hsl(0, 100%, 67%)");
         userInput.css("border-color","hsl(0, 100%, 67%)");
         validator = false;
        } 

         
  else if(yearInput.val() > odun) {
      yearError.text("Must be in the past");
      label.css("color","hsl(0, 100%, 67%)");
      userInput.css("border-color","hsl(0, 100%, 67%)");
     validator = false;
  } 

     else if(yearInput.val() < 1) {
      yearError.text("Must be a valid year");
      label.css("color","hsl(0, 100%, 67%)");
      userInput.css("border-color","hsl(0, 100%, 67%)");
      validator = false;
  } 

   else  {
        yearError.text("");
        userInput.css("border-color","hsl(0, 0%, 86%)");
        label.css("color","hsl(0, 1%, 44%)");
         validator = true;
}

   return validator;
 

 }







       
 function calculator(e) {
    e.preventDefault();
    if (validate()) {

    
    let day = bayi.getDate() - dayInput.val();
    

   let month = bayi.getMonth() + 1 - monthInput.val();

   let year = odun - yearInput.val();
    $("#ojo").text(year);

    let leap = new Date().getMonth() + 1;

   

    if (month >= 0) {
        $("#oshu").text(month);
    }

    else if (month < 0) {
       let zag = year - 1;
        $("#ojo").text(zag);

      let sec = 12 + month;
      $("#oshu").text(sec);
      
   }

   if (day >= 0) {
      $("#ori").text(day);
   } 
    else if (day < 0) {
            let zag = year - 1;
            $("#ojo").text(zag);

          let vin = 12 + month - 1;
            $("#oshu").text(vin);


          let gian = 31 + day;
              $("#ori").text(gian);

   }

   else if (day < 0 && leap === 2) {
            let zag = year - 1;
            $("#ojo").text(zag);

          let vin = 12 + month - 1;
            $("#oshu").text(vin);


          let gian = 28 + day;
              $("#ori").text(gian);

   }

    else if (day >= 0  &&  leap === 4 || leap === 6 || leap === 9 || leap === 11) {
            let zag = year - 1;
            $("#ojo").text(zag);

          let vin = 12 + month - 1;
            $("#oshu").text(vin);


          let gian = 30 + day;
              $("#ori").text(gian);

   }

   }

   }

    push.on("click", calculator);

   

   

    


 





 





  