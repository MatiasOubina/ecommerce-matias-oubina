import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDKGO1xtobZStSEfOjhUHd2BpAUQlkLZ6o",
  authDomain: "db-jckfood.firebaseapp.com",
  projectId: "db-jckfood",
  storageBucket: "db-jckfood.appspot.com",
  messagingSenderId: "288377331360",
  appId: "1:288377331360:web:58643a0485145381d533c5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);