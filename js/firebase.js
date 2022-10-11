
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyAmKmCN_WEAK2S9a79AYq687KxecNqocBk",
  authDomain: "prodavfilms.firebaseapp.com",
  projectId: "prodavfilms",
  storageBucket: "prodavfilms.appspot.com",
  messagingSenderId: "346880381892",
  appId: "1:346880381892:web:d7d814441abe921e61ca91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export const getProyectos = () => getDocs(collection(db, "proyectos"));




