<template>
  <div>
    <Avatar v-bind:username="user.username" v-bind:phone="user.phone"/>
  </div>
</template>

<script>
  import Avatar from "./components/Avatar";
  import {createNamespacedHelpers} from 'vuex'
  const {mapState,mapActions} = createNamespacedHelpers("data");
  export default {
    name: "User",
    components: {Avatar},
    computed:{
      ...mapState(['user'])
    }
  }
</script>

<style scoped>

</style>
