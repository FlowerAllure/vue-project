<template>
  <a href="#/">Home</a> |
  <a href="#/api">Api</a> |
  <component :is="currentView"></component>
</template>

<script>
import Home from './components/Home.vue'
import Api from './components/Api.vue'

const routes = {
  '/': Home,
  '/api': Api
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>