
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA49Ctsqyraz7wHyoh_r0FVqt0lUZa0Nw8",
    authDomain: "signinauthentication-6be5e.firebaseapp.com",
    projectId: "signinauthentication-6be5e",
    storageBucket: "signinauthentication-6be5e.appspot.com",
    messagingSenderId: "200702811256",
    appId: "1:200702811256:web:edf4bbc9db80475d37e18d",
    measurementId: "G-QW6HC3RRKK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
