import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBYeJQntkD0_tU22WA98OBk0tfc1rv-IFg",
    authDomain: "smith-todo-app.firebaseapp.com",
    databaseURL: "https://smith-todo-app.firebaseio.com",
    projectId: "smith-todo-app",
    storageBucket: "smith-todo-app.appspot.com",
    messagingSenderId: "260871394675"
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref()

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Martin',
    age: 55
  }
});

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('child added', snapshot.key, snapshot.val());
})

var newNoteRef = notesRef.push({
  text: 'Walk the dog!'
});

console.log('Key', newNoteRef.key);