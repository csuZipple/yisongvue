<template>
  <footer>
    <router-view/>
    <p class=".footer">
      I'm footer container!
    </p>
  </footer>

</template>

<script>
    export default {
        name: "Container"
    }
</script>

<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
  }
</style>
