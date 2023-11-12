import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_PUBLIC_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
//   storageBucket: import.meta.env.VITE_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_PUBLIC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAT2lvGEhzVdSwPmhh6r58MOnL0L4p934g",
  authDomain: "people-f1097.firebaseapp.com",
  databaseURL: "https://people-f1097-default-rtdb.firebaseio.com",
  projectId: "people-f1097",
  storageBucket: "people-f1097.appspot.com",
  messagingSenderId: "541779336485",
  appId: "1:541779336485:web:5db3901836ac1b14330ecc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
