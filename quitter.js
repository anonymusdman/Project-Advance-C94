// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCtuljL1aPusUqbUTpoV4Y-F8GXy6ApOiU",
    authDomain: "letschat-3ddf2.firebaseapp.com",
    databaseURL: "https://letschat-3ddf2-default-rtdb.firebaseio.com",
    projectId: "letschat-3ddf2",
    storageBucket: "letschat-3ddf2.appspot.com",
    messagingSenderId: "553311998624",
    appId: "1:553311998624:web:971359e1b954575ad8afc5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function add_user(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "quitter_room.html";
}
