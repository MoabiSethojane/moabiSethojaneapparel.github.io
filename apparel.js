logo();
    function logo()
    {
    	var lg=  document.getElementById('logo');
    	lg.innerHTML="<img src='./images/logo.svg'>";
         
    }

    desktop_picture();
    function desktop_picture(){
    	var dp = document.getElementById('myimage');
  dp.innerHTML="<img src='./images/hero-desktop.jpg'>";
    }
    fisrtH();
    function fisrtH(){
     docuument.getElementById('first_head').innerHTML= "We're ";	
    }
   

var email = document.getElementById("email").value;	
var icon1= document.getElementById("erro-image").value;
var icon2= document.getElementById("arrow-image").value;
var error_message= document.getElementById("error-text");
var error_message.style.padding ="5px";
var text;


function check() {
  if(email.indexOf("@")==-1 || email.length<6){
  email.style.borderColor ="#e74c3c";
  icon2.style.display= "block";
text= "Please enter valid email address";
   error_message.innerHTML = text;
  }else{
  email.style.borderColor ="#e74c3c";
  icon1.style.display="block";
  text= "Please enter valid name"
   error_message.innerHTML = text;

  }
  if(email.value==""){
  	 email.style.borderColor ="lightgrey";
  text= "Please enter valid name"
   error_message.innerHTML = text;;  
  }
}
