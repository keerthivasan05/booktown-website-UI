firebase.auth().createUserWithEmailAndPassword(Email,Password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: ",errorMessage);
    // ...
  });
  function signUp(){
      var Email=document.getElementById("email_field").value;
      var Password=document.getElementById("pass_field").value;
  }



  
 /* function signUp(){
   // var email=document.getElementById("Email").value;
   // var =document.getElementById("Password").value;
      window.alert("working");
  }
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)*/


  
  