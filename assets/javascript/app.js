var config = {
    apiKey: "AIzaSyBZe-mJP6-u6tNDX8zRPka8LJywckwBX98",
    authDomain: "traintime-852dd.firebaseapp.com",
    databaseURL: "https://traintime-852dd.firebaseio.com",
    projectId: "traintime-852dd",
    storageBucket: "",
    messagingSenderId: "175030079481"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var currentTime = moment;

  