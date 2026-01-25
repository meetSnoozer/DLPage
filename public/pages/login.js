
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCtDBFbZ9QBhqchyaPVAce145IMPzekYWA",
    authDomain: "dlpage-e807c.firebaseapp.com",
    projectId: "dlpage-e807c",
    storageBucket: "dlpage-e807c.firebasestorage.app",
    messagingSenderId: "216742989828",
    appId: "1:216742989828:web:c8193623b5ecc8a1862551"
  };
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth);
const loginButton = document.getElementById("login-btn");
var uname = document.getElementById("username");
var password= document.getElementById("password");

loginButton.onclick=async()=>{
  if(username.value=="adminBackPage1111"&&password.value=="supermax1234"){
    window.location.href = "admin-page.html";
    return;
  }
  const creds = await signInWithEmailAndPassword(auth, uname.value, password.value)

  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user.emailVerified){
 console.log(user);
    console.log("login successfull...");
    localStorage.setItem("uname",uname.value);
    //localStorage.setItem("email",email.value);
    window.location.href = "user-page.html";
    }
    else{
      alert("unverified account");
  

    }
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}

