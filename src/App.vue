<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <footers/>
  </div>
</template>

<script>
import navbar from './components/navbar'
import footers from './components/footer'

export default {
  components: {
    navbar,
    footers
  }
}
</script>

<style>

</style>
