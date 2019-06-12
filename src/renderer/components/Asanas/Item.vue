<template>
  <article class="asanas-item">
    {{ asana.name }}
    {{ asana.duration }}
    <Button @click.native="edit()">edit</Button>
    <Button @click.native="remove(asana.id)">remove</Button>
  </article>
</template>

<script>
  import Button from '@/components/Button'

  export default {
    components: {
      Button
    },
    props: {
      asana: Object
    },
    methods: {
      edit() {
        this.$emit('edit')
      },
      remove(id) {
        this.$store.dispatch('asanas/removeItem', id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .asanas-item {
    
  }
</style>