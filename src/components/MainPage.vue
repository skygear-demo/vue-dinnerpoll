<template>
  <b-container>
    <b-row>
      <b-col class="text-right">
        <b-button variant="primary" @click="signOut">Sign out</b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <results-chart/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import skygear from 'skygear'
import ResultsChart from './ResultsChart'

export default {
  components: {
    ResultsChart
  },
  methods: {
    signOut () {
      skygear.auth.logout()
        .then(() => {
          this.$emit('sign-out')
        })
        .catch(({ error }) => {
          console.error(error)
          this.setState({
            event: {
              type: 'error',
              message: error.message
            }
          })
        })
    }
  }
}
</script>
