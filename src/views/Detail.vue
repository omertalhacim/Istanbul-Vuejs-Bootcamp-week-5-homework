<template>
  <div class="container">
    <h1>{{title}}</h1>
    <img class="card-img-top" :src="imageUrl" />
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      title: "",
      imageUrl: "",
    };
  },
  created() {
    const axios = require("axios");
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos/${this.$route.params.id}`
      )
      .then((response) => {
        this.title = response.data.title;
        this.imageUrl = response.data.url;
      });
  },
};
</script>