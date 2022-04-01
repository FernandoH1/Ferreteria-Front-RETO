// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyAXdr1M1L-LJopvy_KefYpu2TMEQi2xwBo",
  authDomain: "app-login-47586.firebaseapp.com",
  projectId: "app-login-47586",
  storageBucket: "app-login-47586.appspot.com",
  messagingSenderId: "887936885251",
  appId: "1:887936885251:web:7b0d65217240c797cb6436"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
