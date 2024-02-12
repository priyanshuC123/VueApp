import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBAhWIbT8Df7JOen5GQq9LWQBr7_rulQAE",
    authDomain: "vueapp-60042.firebaseapp.com",
    projectId: "vueapp-60042",
    storageBucket: "vueapp-60042.appspot.com",
    messagingSenderId: "719118606134",
    appId: "1:719118606134:web:30edbdbda0900e5cbfdd97"
  };

const firebassapp = initializeApp(firebaseConfig);
const auth = getAuth(firebassapp)

const db = getFirestore(firebassapp);

export {auth,db}

const app = createApp(App)

app.use(router)
app.mount('#app')
