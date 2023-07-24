import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
    apiKey: "AIzaSyBus8csM0x_i8xsIZtg42_9cJhYjBwQE3g",
    authDomain: "chat-app-d69dc.firebaseapp.com",
    projectId: "chat-app-d69dc",
    storageBucket: "chat-app-d69dc.appspot.com",
    messagingSenderId: "229887517066",
    appId: "1:229887517066:web:632b5050491a5662eee873",
    measurementId: "G-DC9SV0ES4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
