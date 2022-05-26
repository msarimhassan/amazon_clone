import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBe1z3AZygpO-iQkJg4rJ-TaeSbIjRtdbU',
    authDomain: 'clone-816f7.firebaseapp.com',
    projectId: 'clone-816f7',
    storageBucket: 'clone-816f7.appspot.com',
    messagingSenderId: '1098827026674',
    appId: '1:1098827026674:web:ff8ccbc2fdffbd0d2a406b',
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);