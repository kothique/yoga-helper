<template>
  <form id="asanas-form-create">
    <input ref="name" id="name" type="text" v-model="name" />
    <input id="duration" type="number" v-model="duration" />
    <Button @click.native="add()">add</Button>
    <Button @click.native="cancel()">cancel</Button>
  </form>
</template>

<script>
  import Button from '@/components/Button'

  export default {
    components: {
      Button
    },
    data: () => ({
      name: '',
      duration: 0
    }),
    mounted() {
      this.$refs.name.focus()
    },
    methods: {
      clear() {
        this.name = ''
        this.duration = 0
      },
      add() {
        this.$emit('add', {
          name: this.name,
          duration: this.duration
        })
        this.clear()
      },
      cancel() {
        this.$emit('cancel')
        this.clear()
      }
    }
  }
</script>

<style scoped lang="scss">
  #asanas-form-create {

    #name {
      
    }
    
    #duration {
      
    }
  }
</style>