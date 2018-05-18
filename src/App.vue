<template>
  <div>
    <b-container v-if="!signedIn">
      <b-row align-v="center" style="min-height: 100vh;">
          <b-col>
            <auth-page @sign-in="signIn"/>
          </b-col>
      </b-row>
    </b-container>
    <main-page v-else/>
  </div>
</template>

<script>
import skygear from 'skygear'
import AuthPage from './components/AuthPage'
import MainPage from './components/MainPage'

export default {
  data () {
    return {
      signedIn: true || skygear.auth.currentUser
    }
  },
  methods: {
    signIn () {
      this.signedIn = true
    }
  },
  components: {
    AuthPage,
    MainPage
  }
}
</script>
