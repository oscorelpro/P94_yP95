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

  function send()
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
  }
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Inica código

//Termina código
 } });  }); }
getData();