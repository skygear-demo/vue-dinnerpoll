<script>
import skygear from 'skygear'
import randomColor from 'randomcolor'
import { Bar, mixins } from 'vue-chartjs'
const { reactiveData } = mixins

export default {
  extends: Bar,
  mixins: [reactiveData],
  data () {
    return {
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        title: {
          display: true,
          text: '# of votes'
        }
      }
    }
  },
  mounted () {
    this.refresh().then(() => {
      this.renderChart(this.chartData, this.options)
    })

    skygear.pubsub.on('vote', this.refresh)
  },
  methods: {
    refresh () {
      return skygear.lambda('query_polling_results')
        .then(({ results }) => {
          this.chartData = {
            labels: results.map(result => result.dish),
            datasets: [{
              data: results.map(result => result.count),
              backgroundColor: randomColor({
                count: results.length,
                luminosity: 'light',
                format: 'rgba',
                alpha: 0.5
              }),
              borderWidth: 1
            }]
          }
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
