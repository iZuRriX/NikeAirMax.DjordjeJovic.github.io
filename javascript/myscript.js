/* Dugme "LEARN MORE" */
document.getElementsByClassName("buttons").onclick = function fnTopButton () {};
  function fnTopButton () {
      location.href = "https://www.nike.com/w/air-max-97-shoes-77f38zy7ok";
  };

/* Dugme "CREATE YOUR OWN" */
document.getElementByName("dugme1").onclick = function fnDugme1 () {};
  function fnDugme1 () {
    location.href = "https://www.nike.com/u/custom-nike-air-max-97-by-you-10000771/1581273587047";
  };

/* ------------------------------------------------------------------------------------------------------ */
// Uzima klasu .okreniNestani koja daje elementima burger menija (linija 1, 2 & 3) osobine u CSS-u koje služe kao animacija.
// Klikom na .burgerWrap se poziva donja funkcija "burgerAnimacija(this)".

function burgerAnimacija(x) {
  x.classList.toggle("okreniNestani");
}

/* ------------------------------------------------------------------------------------------------------ */

/* Form */
function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errorMessage = document.getElementById("errorMessage");
    
    errorMessage.style.padding = "10px";
    
    var text;
    if(isNaN(name) && name.length < 5){
      text = "Please Enter A Valid Name";
      errorMessage.innerHTML = text;
      return false; //zadržava "errorMessage"
    }
    if(isNaN(phone) || phone.length > 15 || phone.length < 1){
      text = "Please Enter A Valid Phone Number";
      errorMessage.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter A Longer Subject";
      errorMessage.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 8){ // y@live.de = 9 karaktera
      text = "Please Enter A Valid Email";
      errorMessage.innerHTML = text;
      return false;
    }
    if(message.length < 100){
      text = "Please Enter More Than 100 Characters";
      errorMessage.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}