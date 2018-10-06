import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCnSW6kNQYS7zRYw7-0s7LrcO9oIYImsPM",
  authDomain: "check-c9fc5.firebaseapp.com",
  databaseURL: "https://check-c9fc5.firebaseio.com",
  projectId: "check-c9fc5",
  storageBucket: "check-c9fc5.appspot.com",
  messagingSenderId: "18829729549"
};

firebase.initializeApp(config);

const database = firebase.database();

export {
  database,
};
