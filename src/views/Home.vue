<template>
  <div>
    <span class="ml-4">Album ID:</span>
    <select class="ml-3" v-model="selectedId">
      <option v-for="albumId in getAlbumIdList" :value="albumId" :key="albumId">{{albumId}}</option>
    </select>
    <div class="card-deck">
      <div class="row ml-1 mr-1">
        <div class="col-md-2 mt-3" v-for="item in getSelectedAlbumsItems" :key="item.id">
          <div class="card">
            <img class="card-img-top" :src="item.thumbnailUrl" />
            <div class="card-body">
              <p>Photo ID: {{item.id}}</p>
              <p>Total Vote = {{item.voteCount}}</p>
              <div class="row">
                <button @click="voteUp(item)" class="col-md-6 btn btn-success active">Vote</button>
                <button @click="voteDown(item)" class="col-md-6 btn btn-danger active">Unvote</button>
              </div>
              <div class="row mt-3">
                <router-link
                  :to="`/detail/${item.id}`"
                  tag="button"
                  class="col-md-12 btn btn-secondary"
                >See Details</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      selectedId: 1,
    };
  },
  methods: {
    voteUp(item) {
      if (item.voteCount != null) {
        item.voteCount += 1;
      } else {
        item.voteCount = 1;
      }
    },
    voteDown(item) {
      if (item.voteCount != null) {
        if (item.voteCount != 0) {
          item.voteCount -= 1;
        }
      } else {
        item.voteCount = 0;
      }
    },
  },
  computed: {
    ...mapState(["allItems", "albumIdList"]),
    ...mapGetters(["getAlbumIdList"]),
    getSelectedAlbumsItems() {
      return this.allItems.filter((item) => item.albumId == this.selectedId);
    },
  },
};
</script>
