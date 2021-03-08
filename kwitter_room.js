
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAbLfiA10wChHqPP694CBZySdBZYWx2rxU",
      authDomain: "kwitter-6c970.firebaseapp.com",
      projectId: "kwitter-6c970",
      storageBucket: "kwitter-6c970.appspot.com",
      messagingSenderId: "143887052025",
      appId: "1:143887052025:web:d79a36380c838d178c8628"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
