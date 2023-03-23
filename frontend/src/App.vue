

<template>
  <div id="app">
    <nav>
      <router-link to="/">Avaleht</router-link> |
      <router-link to="/panustamine">Panustamine</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'App',
};
</script>