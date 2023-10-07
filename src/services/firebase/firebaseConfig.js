import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyATXvbdyNdnqdn4tb1RM9C73Fm9cawOrV0",
  authDomain: "bourdeaux-926ac.firebaseapp.com",
  projectId: "bourdeaux-926ac",
  storageBucket: "bourdeaux-926ac.appspot.com",
  messagingSenderId: "287153105634",
  appId: "1:287153105634:web:35572c4170764a359eccbb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
