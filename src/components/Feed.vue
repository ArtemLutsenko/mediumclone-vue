<template>
  <div>
    <mcv-loading v-if="isLoading" />
    <mcv-error-message v-if="error">Something bad happened</mcv-error-message>
    <div v-if="feed">
      <div class="article-preview" v-for="(article, index) in feed.articles" :key="index">
        <div class="article-meta">
          <router-link :to="{name: 'userProfile', params:{ slug: article.author.username}}">
            <img :src="article.author.image">
          </router-link>
          <div class="info">
            <router-link :to="{name: 'userProfile', params:{ slug: article.author.username}}" class="author">
              {{article.author.username}}
            </router-link>
            <div class="date">{{article.createdAt}}</div>
          </div>
          <div class="pull-xs-right">Add to favorites</div>
          <router-link :to="{name: 'article', params: {slug: article.slug}}" class="preview-link">
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
            TAG LIST
          </router-link>
        </div>
      </div>
      <mcv-pagination :total="feed.articlesCount" :limit="limit" :currentPage="currentPage" :url="baseUrl"/>
    </div>
  </div>
</template>

<script>
import {actionTypes} from "@/store/modules/feed";
import {mapState} from 'vuex'
import McvPagination from '@/components/Pagination'
import {limit} from "@/helpers/vars";
import {stringify, parseUrl} from 'query-string'
import McvLoading from "@/components/Loading";
import McvErrorMessage from "@/components/ErrorMessage";

export default {
  name: "McvFeed",
  props: {
    apiUrl: {
      required: true,
      type: String
    }
  },
  components:{
    McvErrorMessage,
    McvLoading,
    McvPagination
  },
  data() {
    return {
      limit,
      url: '/'
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      feed: state => state.feed.data,
      error: state => state.feed.error
    }),
    currentPage(){
      return +this.$route.query.page || 1
    },
    baseUrl(){
      return this.$route.path
    },
    offset(){
      return this.currentPage * limit - limit
    }
  },
  watch:{
    currentPage(){
      this.fetchFeed()
    }
  },
  methods:{
    fetchFeed(){
      const parsedUrl = parseUrl(this.apiUrl)
      const stringifiesParams = stringify({limit, offset: this.offset, ...parsedUrl.query})
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiesParams}`
      this.$store.dispatch(actionTypes.getFeed, {apiUrl: apiUrlWithParams})
    }
  },
  mounted() {
    this.fetchFeed()
  }
}
</script>

<style scoped>

</style>
