<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
.pd-l-r-50{
  padding-left: 50px;
  padding-right: 50px;
}
.l-r-center{
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
</style>
