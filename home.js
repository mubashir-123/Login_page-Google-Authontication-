import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { auth } from './config.js'

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
        console.log(uid);
    } else {
        window.location = 'index.html';
    }
  });

const logout = document.querySelector('#logout');

logout.addEventListener('click',()=>{
    signOut(auth).then(() => {
      window.location = 'index.html';
    }).catch((error) => {
      alert('Cannot logout please check first');
    });
});