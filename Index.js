

window.onload = function() {
  let Submit = document.querySelector('#contact-me-form');

  Submit.onsubmit = function(event) {
    if(!Submit.checkValidity()) {
    
      Submit.classList.add('was-validated');
    
      
      
      event.preventDefault();
      
      return false;
    }


    
    return true;
  }

}




function display(){

  if (document.getElementById("hourly-rate-form").classList.contains("hide"))

  document.getElementById("hourly-rate-form").classList.remove("hide");

  if(document.getElementById("feedback-hourly-rate").required == false)

  document.getElementById("feedback-hourly-rate").required = true;

}



function nodisplay(){

  if (!document.getElementById("hourly-rate-form").classList.contains("hide"))

  document.getElementById("hourly-rate-form").classList.add("hide");

  if(document.getElementById("feedback-hourly-rate").required == true)

  document.getElementById("feedback-hourly-rate").required = false;

  document.getElementById("feedback-hourly-rate").value = "";

}