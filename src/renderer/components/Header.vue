<template>
  <header id="header">
    <Button @click.native="$router.push({ name: 'asanas' })">Asanas</Button>
    <Button @click.native="$router.push({ name: 'cycles' })">Cycles</Button>
    <Button @click.native="$router.push({ name: 'options' })">Options</Button>
    <hr />
  </header>
</template>

<script>
  import Button from '@/components/Button'
  
  export default {
    components: {
      Button
    }
  }
</script>

<style scoped lang="scss">

</style>