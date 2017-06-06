// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAhYZiCRIfH7_HpFSqxuehm2DqByXYLtlg",
    authDomain: "give-n-take-35cd8.firebaseapp.com",
    databaseURL: "https://give-n-take-35cd8.firebaseio.com",
    projectId: "give-n-take-35cd8",
    storageBucket: "give-n-take-35cd8.appspot.com",
    messagingSenderId: "992232521063"
  };
  firebase.initializeApp(config);

$("#submit").on("click", function (event){
	event.preventDefault();

var email = document.getElementById("email");
var password = document.getElementById("password");
console.log("button clicked")

firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  // ...
});

});