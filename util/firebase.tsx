import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

let app;
if (getApps().length === 0) {
  app = initializeApp({
		apiKey: "AIzaSyC1LBuVgAQnk_l-sJaT_fJEZ1qWqWR_FDI",
		authDomain: "mini-chat-cdf65.firebaseapp.com",
		projectId: "mini-chat-cdf65",
		storageBucket: "mini-chat-cdf65.appspot.com",
		messagingSenderId: "42675600570",
		appId: "1:42675600570:web:028127069b81435dc65683",
		measurementId: "G-HM8E3KVBX7"
    });
} else {
  app = getApp();
}

export const auth = getAuth(app);
export const firebaseApp = app;
