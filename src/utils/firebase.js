// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import * as firebaseui from 'firebaseui'

//import { getAnalytics } from 'firebase/analytics'

//--- from the tutorial https://medium.com/innovance-company-blog/how-to-connect-firebase-realtime-database-to-a-react-app-f7dcb983150a
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESUREMENTS,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//const analytics = getAnalytics(app)

//--- from the tutorial https://medium.com/innovance-company-blog/how-to-connect-firebase-realtime-database-to-a-react-app-f7dcb983150a
export const db = getDatabase(app)
export const auth = getAuth(app)
