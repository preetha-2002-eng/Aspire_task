//login page
function handleLogin(event) {
  event.preventDefault(); 
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "admin" && password === "admin") {
      window.alert("Login Successful! Welcome, Admin.");
      window.location.href = "dash.html";
  } else {
      window.location.href = "home.html";
}
}
document.getElementById('loginForm').addEventListener('submit', handleLogin);


//Signup page
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
      alert("All fields are required");
      return;
  }

  if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
      return;
  }
  alert("You have successfully registered");
  window.location.href = "login.html";
  // If all validations pass, you can submit the form
  //document.getElementById("signupForm").submit();
}