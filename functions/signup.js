
function signup(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  console.log("email:", email);
  console.log("password:", password);
  console.log(firebase);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
      console.log("signin ok");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      console.log("error!");
    });
}