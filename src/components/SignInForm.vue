<template>
  <b-form @submit="onSubmit">
    <b-form-group>
      <b-form-input v-model="username" type="text" placeholder="Username" required></b-form-input>
    </b-form-group>

    <b-form-group :state="state" :invalid-feedback="invalidFeedback">
      <b-form-input v-model="password" type="password" placeholder="Password" required></b-form-input>
    </b-form-group>

    <div class="text-center">
      <b-button type="submit" variant="primary" block>Sign in</b-button>
     <b-button variant="link" >Sign up?</b-button>
    </div>
  </b-form>
</template>

<script>
import skygear from 'skygear'

export default {
  data () {
    return {
      username: '',
      password: '',
      state: null,
      invalidFeedback: ''
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      skygear.auth.loginWithUsername(this.username, this.password)
        .then((user) => {
          console.log(user) // user record
        })
        .catch((error) => {
          console.error(error)
          if (error.error.code === skygear.ErrorCodes.InvalidCredentials ||
              error.error.code === skygear.ErrorCodes.ResourceNotFound) {
            // incorrect username or password
            this.state = false
            this.invalidFeedback = 'Incorrect username or password'
          } else {
            // other kinds of error
          }
        })
    }
  }
}
</script>
