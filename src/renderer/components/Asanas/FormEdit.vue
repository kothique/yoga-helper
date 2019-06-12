<template>
  <form class="asanas-form-edit">
    <input ref="name" class="name" type="text" v-model="name" />
    <input class="duration" type="number" v-model="duration" />
    <Button @click.native="success()">{{ creation ? 'create' : 'save' }}</Button>
    <Button @click.native="cancel()">cancel</Button>
  </form>
</template>

<script>
  import Button from '@/components/Button'

  export default {
    components: {
      Button
    },
    props: {
      creation: Boolean,
      default: Object
    },
    data: () => ({
      name: '',
      duration: 0
    }),
    mounted() {
      this.$refs.name.focus()
      if (this.default) {
        this.name = this.default.name
        this.duration = this.default.duration
      }
    },
    methods: {
      clear() {
        this.name = ''
        this.duration = 0
      },
      success() {
        this.$emit('success', {
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
  .asanas-form-edit {

    .name {
      
    }
    
    .duration {
      
    }
  }
</style>