<template>
<!--<div id='app'>
<img src='./assets/logo.png'>
<router-view/>
</div>-->
<!--ddj understanding of 1of2 ESLint complaints-->
<div id='app' class='jumbotron'>
<code contenteditable='true'>
<span style='color: blue'>var</span> foo = <span style='color: green'>'bar'</span>;
</code>
<div class='container'>
<h1>Hello! Nice to meet you!</h1>
<hr/>
<form @submit='addMessage'>
  <div class='form-group'>
    <input class='form-control' v-model='newMessage.title' maxlength='40' autofocus
           placeholder='Please introduce yourself :)'/>
  </div>
  <div class='form-group'>
  <textarea class='form-control' v-model='newMessage.text' placeholder='Leave your message!' rows='3'>
</textarea>
  </div>
  <button class='btn btn-primary' type='submit'>Send</button>
</form>
<hr/>
<div>
  <div class='card-group'>
    <div class='card' v-for='message in rev_messages'>
    <!--<div class='card' v-for='message in reverse(messages)'>-->
    <!--<<div class='card' v-for='message in reverse(messages)'>-->
    <!--<<div class='card' v-for='message in reverse({array : messages})'>-->
    <!--<<div class='card' v-for='message in messages'>-->
    <!--<<div class='card' v-for='message in rev_messages'>-->
      <h4 class='card-title'>{{ message.title }}</h4>
      <p class='card-text'>{{ message.text }}</p>
      <p class='card-text'>
        <small class='text-muted'>Added on {{ dateToString(message.timestamp) }}</small>
      </p>
      <!--<h5>{{ message }}</h5>-->
    </div>
  </div>
  <div class='card-columns'>
    <div class='card' v-for='(message) in messages'>
      <div v-for='(m, k) in message'>
        <div class='card-block'>
          <h5 class='card-title'>{{ k }} : {{ m }}</h5>
        </div>
        <!--<h4>{{ message }}</h4>-->
      </div>
    </div>
  </div>
  <!--<div v-bind:key='void' v-for='(poruka, idx) in poruke'>-->
  <!--<div v-for='(poruka, idx) in poruke'>-->
  <div v-for='(poruka, key) in poruke'>
    U Porukama
    <!--<h4>{{ poruka[key].title }}</h4>
    <p>{{ poruka[key].text }}</p>
    <p>{{ poruka[key].timestamp }}</p>-->
    <h4>{{ poruke[key].title }}</h4>
    <p>{{ poruke[key].text }}</p>
    <p>{{ poruke[key].timestamp }}</p>
    <h3 style='color: purple'>
      {{ poruka }}
    </h3>
    <!--<h4>{{ poruka.title }}</h4>
    <p>{{ poruka.text }}</p>
    <p>{{ poruka.timestamp }}</p>-->
    <!--<h4>{{ poruka[idx] }}</h4>
    <p>{{ poruka[idx] }}</p>
    <p>{{ poruka[idx] }}</p>-->
  </div>
  <div v-for='(noneed, key) in nnp'>
    <h4>{{ nnp[key] }}</h4>
    <p>{{ noneed }}</p>
    <p>{{ key }}</p>
  </div>
</div>
</div>
</div>
</template>

<!--<script src='https://www.gstatic.com/firebasejs/5.5.4/firebase.js'>
import Firebase from 'firebase'
// Initialize Firebase
var config = {
apiKey: 'AIzaSyBF-dBqOMI3BVm3YcrmDJ01wPmoVytoAVA',
authDomain: 'ca-vue2-bs4-webdev.firebaseapp.com',
databaseURL: 'https://ca-vue2-bs4-webdev.firebaseio.com',
projectId: 'ca-vue2-bs4-webdev',
storageBucket: '',
messagingSenderId: '587197494178'
};
firebase.initializeApp(config); //  -ddjOlgaF: should be capital F
</script>
-->
<!--Firebase dialog title|instruction: Add Firebase to your web app
Copy and paste the snippet below at the bottom of your HTML, before other script tags.-->
<!--<script src='https://www.gstatic.com/firebasejs/5.5.4/firebase.js'></script>-->
<script>
import Firebase from 'firebase'
// import { dateToString } from './utils/utils'
// import { dateToString } from 'utils/utils'
// import { dateToString } from './utils/utils'
import { dateToString, reverse } from './utils/utils'
// import { dateToString, reverse } from '../utils/utils'
// import { } from '../utils/utils'
// Initialize Firebase
let config = {
  apiKey: 'AIzaSyBF-dBqOMI3BVm3YcrmDJ01wPmoVytoAVA',
  authDomain: 'ca-vue2-bs4-webdev.firebaseapp.com',
  databaseURL: 'https://ca-vue2-bs4-webdev.firebaseio.com',
  projectId: 'ca-vue2-bs4-webdev',
  // storageBucket: '',
  // storageBucket: 'OfKOueIJvUM29PN3gYYk.appspot.com',
  storageBucket: 'a-vue2-bs4-webdev.appspot.com',
  messagingSenderId: '587197494178'
  // timestampsInSnapshots: true
}

//  Now, we will obtain the reference to our messages database object. It is pretty simple using the Firebase API:
let app = Firebase.initializeApp(config)
let rtdb = app.database()
let messagesRef = rtdb.ref('messages')

/* let firebase = Firebase.initializeApp(config)
// Initialize Cloud Firestore through Firebase
let firestore = firebase.firestore() */

// Initialize Cloud Firestore through Firebase
let fsdb = app.firestore()

// Disable deprecated features
fsdb.settings({
  timestampsInSnapshots: true
})

// let docRef = firestore.collection('messages').doc('OfKOueIJvUM29PN3gYYk')
// let docRef = firestore.doc('messages/OfKOueIJvUM29PN3gYYk')

let docRef = fsdb.collection('messages')// .doc('poruke')
let nnpRef = fsdb.doc('messages/nepoznat_naziv_polja')
// let docRef = firestore.doc('messages/poruke')
// let docRef = firestore.collection('messages')

fsdb.collection('messages').get().then((querySnapshot) => {
// firestore.collection('OfKOueIJvUM29PN3gYYk').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const fieldsVal = doc.data().valueOf()
    console.log(`doc.data().valueOf() = ${fieldsVal}`)
    // for (let i = 0; i < fieldsVal.length; ++i) console.log(`$fieldsVal[i]`)
    for (let key in fieldsVal) {
      console.log(key)
      console.log(fieldsVal[key])
      console.log('-----------')
    }
    /* console.log(fieldsVal.title)
    console.log(fieldsVal.text)
    console.log(fieldsVal.timestamp) */
    console.log(`${doc.id} => ${doc.data()}`)
  })
})

export default {
//  Now, we just have to export the messages object in the Vue data object so that we are able to use it inside the
// template section.
  name: 'App',
  data () {
    return {
      newMessage: {
        title: '',
        text: '',
        timestamp: null
      },
    }
  },
  firebase: { messages: messagesRef },
  firestore () {
    return { poruke: docRef, nnp: nnpRef }
  },
  computed: {
    rev_messages () {
      return reverse(this.messages)
    }
  },
  methods: {
    dateToString,
    reverse,
    addMessage (e) {
      e.preventDefault()
      if (this.newMessage.title === '') {
        return
      }
      this.newMessage.timestamp = Date.now()
      messagesRef.push(this.newMessage)
      this.newMessage.text = ''
      this.newMessage.title = ''
      this.newMessage.timestamp = null
    }
  }
// After this, inside the <template> tag, we will use a v-for directive to iterate through the messages array and
// print all the information about each message. Remember that each message is composed of title, text, and timestamp.
// So, add the following <div> to the template: (go to the top of the file)
}
//  OfKOueIJvUM29PN3gYYk
</script>

<style>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
