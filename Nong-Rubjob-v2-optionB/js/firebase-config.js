// Firebase Auth is NOT used — demo uses hardcoded accounts.
// Firestore IS used to persist chat sessions and sanctuary data.
const firebaseConfig = {
  apiKey: "AIzaSyCNp6PCsyxCWI2tYGUYvgyKMkLXNJF9QjE",
  authDomain: "gen-lang-client-0866800129.firebaseapp.com",
  projectId: "gen-lang-client-0866800129",
  storageBucket: "gen-lang-client-0866800129.firebasestorage.app",
  messagingSenderId: "879595901925",
  appId: "1:879595901925:web:53d8f78ea0ede2b3b2950c"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
