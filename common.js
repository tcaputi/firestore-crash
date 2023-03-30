import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore, setLogFunction } from "firebase-admin/firestore";

const serviceAccount = {
  //TODO: Add your service account here
};

const firebaseAdminApp = initializeApp({
  credential: cert(serviceAccount),
});

const firebaseAdminDb = getFirestore(firebaseAdminApp);
setLogFunction(console.log);

export { firebaseAdminDb };
