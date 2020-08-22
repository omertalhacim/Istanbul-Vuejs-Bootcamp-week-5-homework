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
        /*for(let item of this.$store.state.allItems){
          item.voteCount = 0;
        }*/
        this.$store.state.allItems = this.$store.state.allItems.map((item) => {
          return {
            ...item,
            voteCount: 0,
          }
        })
      });
  },
};
</script>