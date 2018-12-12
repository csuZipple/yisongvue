<template>
  <footer>
    <router-view/>
    <p class=".footer">
      I'm footer container!
    </p>
  </footer>

</template>

<script>
  //Check if the local cache needs to restore the previously crashed page
    export default {
        name: "Container",
    }
</script>

<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
  }
</style>
