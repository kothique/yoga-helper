<template>
  <div id="page-asanas">
    <Item v-for="asana of asanas" :key="asana.id"
      :asana="asana" />

    <div id="controls-container" v-if="!adding">
      <Button @click.native="adding = true">create</Button>
    </div>
    <FormCreate v-else @add="add($event)" @cancel="adding = false" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Item from '@/components/Asanas/Item'
  import FormCreate from '@/components/Asanas/FormCreate'
  import Button from '@/components/Button'

  export default {
    components: {
      Item,
      FormCreate,
      Button
    },
    data: () => ({
      adding: false,
      newName: '',
      newDuration: ''
    }),
    computed: {
      ...mapState({
        asanas: state => state.asanas.items
      })
    },
    methods: {
      add({ name, duration }) {
        this.$store.dispatch('asanas/newItem', { name, duration })
        this.adding = false
      }
    }
  }
</script>

<style lang="scss">
  #page-asanas {

    #controls-container {
      
    }
  }
</style>