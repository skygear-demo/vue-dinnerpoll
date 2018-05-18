<template>
  <div>
    <b-form-group>
      <b-form-radio-group v-model="selectedDish">
        <b-card-group deck>
          <b-card v-for="(dish, index) in dishes" :key="index" class="text-center" :title="dish.name">
            <p class="card-text">
              {{dish.description}}
            </p>
            <b-form-radio :value="dish.name" class="mr-0"/>
          </b-card>
        </b-card-group>
      </b-form-radio-group>
    </b-form-group>

    <div class="text-right">
      <b-button variant="primary" @click="vote">Vote</b-button>
    </div>
  </div>
</template>

<script>
import skygear from 'skygear'

export default {
  data () {
    return {
      dishes: [
        {
          name: 'Buger',
          description: 'Burger, beacon, cheese and fries!'
        },
        {
          name: 'Char Siu',
          description: 'Barbecued pork in Cantonese cuisine.'
        },
        {
          name: 'Noodles',
          description: 'Traditional wanton noodles in soup.'
        },
        {
          name: 'Pizza',
          description: 'Pizza! I want more pizza and cheese!'
        }
      ],
      selectedDish: null
    }
  },
  methods: {
    vote () {
      if (this.selectedDish) {
        const Vote = skygear.Record.extend('vote')
        this.$emit('async-start')
        skygear.publicDB.save(new Vote({
          dish: this.selectedDish
        }))
          .finally(() => {
            this.$emit('async-end')
          })
          .then(() => {
            skygear.pubsub.publish('vote', {})
          })
          .catch(error => {
            console.error(error)
          })
      }
    }
  }
}
</script>
