import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCaP-s9CduALFMafJ0AX_BXYaaz2baZgKY',
  authDomain: 'ikramzafar-0343-1179c.firebaseapp.com',
  projectId: 'ikramzafar-0343-1179c',
  storageBucket: 'ikramzafar-0343-1179c.firebasestorage.app',
  messagingSenderId: '898773495808',
  appId: '1:898773495808:web:172c3b004d473970f968e5',
  measurementId: 'G-V045SS51R0',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const db = getFirestore(app)
