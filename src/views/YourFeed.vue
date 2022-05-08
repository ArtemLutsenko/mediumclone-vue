<template>
  <div class="home-page">
    <mvc-banner />
    <div class="container page">
    <div class="row">
      <div class="col-md-9">
        <mcv-feed-toggler />
        <mcv-feed :apiUrl="apiUrl"/>
      </div>
      <div class="col-md-3">
        <mcv-popular-tags />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import McvFeed from '@/components/Feed'
import McvPopularTags from "@/components/PopularTags";
import MvcBanner from '@/components/Banner'
import McvFeedToggler from "@/components/FeedToggler";
export default {
name: "McvYourFeed",
  components:{
    McvFeedToggler,
  McvFeed,
    McvPopularTags,
    MvcBanner
  },
  data() {
    return {
      apiUrl: '/articles/feed'
    }
  },
}
</script>

<style scoped>

</style>
