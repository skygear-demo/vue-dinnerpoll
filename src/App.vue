<template>
  <div>
    <b-progress class="fixed-top" v-show="asyncState" :value="100" variant="primary" striped animated></b-progress>
    <b-container v-if="!signedIn">
      <b-row align-v="center" style="min-height: 100vh;">
          <b-col>
            <auth-page @sign-in="signIn" @async-start="onAsyncStart" @async-end="onAsyncEnd"/>
          </b-col>
      </b-row>
    </b-container>
    <main-page v-else @sign-out="signOut" @async-start="onAsyncStart" @async-end="onAsyncEnd"/>
  </div>
</template>

<script>
import skygear from 'skygear'
import AuthPage from './components/AuthPage'
import MainPage from './components/MainPage'

export default {
  data () {
    return {
      asyncState: false,
      signedIn: false || skygear.auth.currentUser
    }
  },
  methods: {
    signIn () {
      this.signedIn = true
    },
    signOut () {
      this.signedIn = false
    },
    onAsyncStart () {
      this.asyncState = true
    },
    onAsyncEnd () {
      this.asyncState = false
    }
  },
  components: {
    AuthPage,
    MainPage
  }
}
</script>
