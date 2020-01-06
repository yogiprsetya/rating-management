<template>
  <v-app id="app">
    <navbar/>
    <router-view/>
    <footers/>
  </v-app>
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
