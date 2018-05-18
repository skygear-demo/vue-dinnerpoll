<template>
  <b-container>
    <b-row align-h="center" align-v="center">
      <b-col cols="2">
        <b-img class="p-3" src="../assets/logo.png" fluid alt="hi"/>
      </b-col>
      <b-col cols="4">
        <h1>What's for dinner?</h1>
        <p><small>A simple polling demo using Skygear</small></p>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="6">
        <sign-in-form v-if="signIn" @swap-form="swapForm"/>
        <sign-up-form v-else @swap-form="swapForm"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

export default {
  data () {
    return {
      signIn: true
    }
  },
  methods: {
    swapForm () {
      this.signIn = !this.signIn
    }
  },
  components: {
    SignInForm,
    SignUpForm
  }
}
</script>
