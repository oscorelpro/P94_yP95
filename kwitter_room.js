const firebaseConfig = {
      apiKey: "AIzaSyDwgjIfV_WjJ8D-thGoIwxx4onnwpUpAL8",
      authDomain: "appwhats-dad9e.firebaseapp.com",
      databaseURL: "https://appwhats-dad9e-default-rtdb.firebaseio.com",
      projectId: "appwhats-dad9e",
      storageBucket: "appwhats-dad9e.appspot.com",
      messagingSenderId: "13745960481",
      appId: "1:13745960481:web:6e80fe3f7b3dc1cd081560"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"<div><hr>";
     document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
}