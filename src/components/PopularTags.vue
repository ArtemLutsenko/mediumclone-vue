<template>
  <div class="">
    <div class="" v-if="isLoading">Loading...</div>
    <div class="" v-if="error">Something bad happen</div>
    <div class="sidebar" v-if="popularTags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link class="tag-default tag-pill" v-for="popularTag in popularTags" :key="popularTag" :to="{name: 'tag', params: {slug:popularTag}}">{{popularTag}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from "@/store/modules/popularTags";

export default {
  name: "McvPopularTags",
  computed: {
    ...mapState({
      isLoading: state => state.popularTags.isLoading,
      error: state => state.popularTags.error,
      popularTags: state => state.popularTags.data
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  }

}
</script>

<style scoped>

</style>
