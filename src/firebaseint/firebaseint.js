import firebase from 'firebase'


var config = {
    apiKey: "AIzaSyDOhcci0Mk42C_Jn4j3haT7GUlskfZ9BJE",
    authDomain: "proyectdesarrollo-69152.firebaseapp.com",
    databaseURL: "https://proyectdesarrollo-69152-default-rtdb.firebaseio.com",
    projectId: "proyectdesarrollo-69152",
    storageBucket: "proyectdesarrollo-69152.appspot.com",
    messagingSenderId: "607700249895",
    appId: "1:607700249895:web:07fb328aa83974b24fcd02"
  };

  const fire = firebase.initializeApp(config);

export default fire;