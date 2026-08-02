const firebaseConfig = {
  apiKey: "AIzaSyACWaupGiYumImjfwkdNfYsB3fmwNm0BOs",
  authDomain: "sanosari-gramhit-portal.firebaseapp.com",
  projectId: "sanosari-gramhit-portal",
  storageBucket: "sanosari-gramhit-portal.firebasestorage.app",
  messagingSenderId: "993982094640",
  appId: "1:993982094640:web:b0f59a280132596311bcf5",
  measurementId: "G-EE9WX6D5WY"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();