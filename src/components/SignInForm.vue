<template>
  <b-form @submit="onSubmit">
    <b-form-group>
      <b-form-input v-model="username" type="text" placeholder="Username" required></b-form-input>
    </b-form-group>

    <b-form-group>
      <b-form-input v-model="password" type="password" placeholder="Password" required></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary" block>Sign in</b-button>
    <b-button variant="link">Sign up?</b-button>
  </b-form>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
