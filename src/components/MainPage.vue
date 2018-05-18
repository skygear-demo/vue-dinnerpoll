<template>
  <b-container class="mt-3">
    <b-row class="mb-3">
      <b-col class="text-right">
        <b-button variant="primary" @click="signOut">Sign out</b-button>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col>
        <results-chart @async-start="$emit('async-start')" @async-end="$emit('async-end')"/>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col>
        <ballot/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import skygear from 'skygear'
import ResultsChart from './ResultsChart.js'
import Ballot from './Ballot'

export default {
  components: {
    ResultsChart,
    Ballot
  },
  methods: {
    signOut () {
      this.$emit('async-start')
      skygear.auth.logout()
        .finally(() => {
          this.$emit('async-end')
        })
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
