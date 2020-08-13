<template>
  <div id="app" class="bg-light">
    <Navbar />
    <br />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  created() {
    this.$store.state.albumIdList.shift();
    const axios = require("axios");
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        this.$store.commit("setAllItems", response.data);
      });
  },
};
</script>