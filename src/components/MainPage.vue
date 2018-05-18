<template>
  <b-container>
    <b-row>
      <b-col class="text-right">
        <b-button variant="primary">Sign out</b-button>
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
import ResultsChart from './ResultsChart'

export default {
  components: {
    ResultsChart
  }
}
</script>
