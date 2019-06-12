<template>
  <div id="page-asanas">
    {{ editing }}
    <template v-for="asana of asanas">
      <Item v-if="!editing[asana.id]" :asana="asana" @edit="$set(editing, asana.id, true)"
        :key="asana.id"/>
      <FormEdit v-else @success="edit({ id: asana.id, ...$event })"
        @cancel="$delete(editing, asana.id)" :key="asana.id"
        :default=asana />
    </template>

    <div id="controls-container" v-if="!adding">
      <Button @click.native="adding = true">create</Button>
    </div>
    <FormEdit v-else creation @success="add($event)" @cancel="adding = false" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Item from '@/components/Asanas/Item'
  import FormEdit from '@/components/Asanas/FormEdit'
  import Button from '@/components/Button'

  export default {
    components: {
      Item,
      FormEdit,
      Button
    },
    data: () => ({
      adding: false,
      editing: {}
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
      },
      edit({ id, name, duration }) {
        this.$store.dispatch('asanas/updateItem', { id, key: 'name', value: name })
        this.$store.dispatch('asanas/updateItem', { id, key: 'duration', value: duration })
        this.$delete(this.editing, id)
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