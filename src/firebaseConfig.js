// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';

// Este objeto lo copias desde tu consola de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT_ID.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROJECT_ID.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializas la app
const app = initializeApp(firebaseConfig);

// La exportas para usarla en otros módulos
export { app };
