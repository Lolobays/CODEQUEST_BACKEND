// Import Firebase modules (use v10.8.1 to match HTML)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPuz2lTQpHSsvp-JG6_Oy4pp1CG-Mp2tc",
  authDomain: "codequest-e6ca2.firebaseapp.com",
  projectId: "codequest-e6ca2",
  storageBucket: "codequest-e6ca2.appspot.com",
  messagingSenderId: "923468819779",
  appId: "1:923468819779:web:b81ffa5eed37996e5413f6",
  measurementId: "G-B70FKVX4TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Correct initialization


//submit
const submit = document.getElementById('buttonLogin');
submit.addEventListener("click", function (event) {
  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  event.preventDefault()
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Signed In!")
      window.location.href = "newDashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
})

//toggle password visiblity

const passwordField = document.getElementById('password');
const togglePasswordImg = document.getElementById('togglePassword');

// Add event listener to the image
togglePasswordImg.addEventListener('click', function() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePasswordImg.src = "../ImageResources/_unhide.png"; 
    } else {
        passwordField.type = "password"; 
        togglePasswordImg.src = "../ImageResources/_Hide.png"; 
    }
});
