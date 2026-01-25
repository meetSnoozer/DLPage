  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,sendEmailVerification  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  //import 'dotenv/config';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCtDBFbZ9QBhqchyaPVAce145IMPzekYWA",
    authDomain: "dlpage-e807c.firebaseapp.com",
    projectId: "dlpage-e807c",
    storageBucket: "dlpage-e807c.firebasestorage.app",
    messagingSenderId: "216742989828",
    appId: "1:216742989828:web:c8193623b5ecc8a1862551"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
    console.log("Firebase initialized", auth);



var uname = localStorage.getItem("username");
var pword = localStorage.getItem("password");
var em = localStorage.getItem("email");
var code=localStorage.getItem("code");

console.log(`Username: ${uname}`);
console.log(`E-mail: ${em}`);
console.log(`Password ${pword}`);
console.log(`code: ${code}`);


  var email = document.getElementById("email")
  var password = document.getElementById("password")
  var username = document.getElementById("username")
  var regButton = document.getElementById("tryReg");
  regButton.onclick = async()=>{
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    await sendEmailVerification(user);
    alert("Email Verification sent. Check your inbox");
    }catch(error){
      console.error("error sign up: ", error.message)
    }

  }
  /*
  function(){
    console.log(`Email : ${email.value}`)
    console.log(`Password : ${password.value}`)
    console.log(`Username : ${username.value}`)
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
})
  } 
  function showDetails(){
    console.log(`Email : ${email}`)
    console.log(`Password : ${password}`)
    console.log(`Username : ${username}`)
    
  }*/