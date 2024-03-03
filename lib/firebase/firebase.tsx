import { initializeApp } from "firebase/app"
import { getFirestore, query, orderBy, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "relief-game.firebaseapp.com",
  projectId: "relief-game",
  storageBucket: "relief-game.appspot.com",
  messagingSenderId: "533966397288",
  appId: "1:533966397288:web:911f9f0d539025183100dd",
}

const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app)

export const getLeaderboard = async () => {
  const citiesRef = collection(firestore, "userdata")
  const q = query(citiesRef, orderBy("score", "desc"))
  const querySnapshot = await getDocs(q)
  const scores = []
  querySnapshot.forEach((doc) => {
    scores.push(doc.data())
  })
  return scores
}
