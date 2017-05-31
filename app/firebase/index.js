import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyBYeJQntkD0_tU22WA98OBk0tfc1rv-IFg",
      authDomain: "smith-todo-app.firebaseapp.com",
      databaseURL: "https://smith-todo-app.firebaseio.com",
      projectId: "smith-todo-app",
      storageBucket: "smith-todo-app.appspot.com",
      messagingSenderId: "260871394675"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;