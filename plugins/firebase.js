import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
     apiKey: "AIzaSyCF6taW3HMDmZg48rT9yAZjydxuDZk1QSw",
     authDomain: "nuxt-share-local.firebaseapp.com",
     projectId: "nuxt-share-local",
     storageBucket: "nuxt-share-local.appspot.com",
     messagingSenderId: "21382957578",
     appId: "1:21382957578:web:0185d114faab0e6a6aedf3"
    }
  )
}

export default firebase