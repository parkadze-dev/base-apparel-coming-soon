// function ValidateForm() {
//   var email = document.getElementById("email");

//   alert("nigga please write your email");
// }

var form = document.getElementById("myForm");

function handleForm(event) {
  // Prevent page reload
  event.preventDefault();

  // declaring email variable
  var email = document.getElementById("email");
  var error = document.getElementById("error-text");
  var errorIcon = document.getElementById("error-icon");

  // If email was not entered, return this
  if (email.value == "") {
    email.style.borderColor = "red";
    error.innerHTML = "Please enter an email address";
    errorIcon.style.visibility = "visible";
  }
  // If email is formatted correctly
  else if (!/(.+)@(.+){2,}\.(.+){2,}/.test(email.value)) {
    email.style.borderColor = "red";
    error.innerHTML = "Please enter a valid email address";
    errorIcon.style.visibility = "visible";
  } else {
    // If ifs = false
    email.style.borderColor = "hsla(0, 36%, 70%, 0.5)";
    error.innerHTML = "";
    errorIcon.style.visibility = "hidden";
    document.getElementById("myForm").submit();
  }
}

form.addEventListener("submit", handleForm);
