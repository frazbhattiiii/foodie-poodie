import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCYSaoVy6iQ6anh_stc5QtO58Kxgo0_wD0",
    authDomain: "foodie-poodie.firebaseapp.com",
    databaseURL: "https://foodie-poodie-default-rtdb.firebaseio.com",
    projectId: "foodie-poodie",
    storageBucket: "foodie-poodie.appspot.com",
    messagingSenderId: "534235861427",
    appId: "1:534235861427:web:0885025604809f1c1bbbc6",
    measurementId: "G-6W1K9EJQ95"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {firestore,storage,app};
