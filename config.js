//firebase config key setup
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

//Your web app's Firebase configuration

const firebaseConfig={
    apiKey: "AIzaSyDr86QHPCa80VmmqSq2ORk_HcEzcq8-ZhI",
  authDomain: "fireapp-661f4.firebaseapp.com",
  projectId: "fireapp-661f4",
  storageBucket: "fireapp-661f4.appspot.com",
  messagingSenderId: "290327928277",
  appId: "1:290327928277:web:5dc410223aee55d0c1f15c",
  measurementId: "G-5JH24LHKRN"
}

if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}
// const app=initializeApp(firebaseConfig);
// export const auth=getAuth(app);
// export const db=getFirestore(app);
// export const storage=getStorage(app);

export { firebase };