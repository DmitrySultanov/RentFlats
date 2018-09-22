<template>
  <div>
    <div class="wrapper">
      <app-header></app-header>
      <app-search-panel></app-search-panel>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <app-footer></app-footer>
  </div>
</template>



<script>
  import Vue from 'vue'
  import 'vue-awesome/icons/'
  import FaIcon from 'vue-awesome/components/Icon'
  // custom components
  import AppHeader from './components/AppHeader.vue'
  import AppSearchPanel from './components/AppSearchPanel.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
    name: 'app',
    components: {
      'fa-icon': FaIcon, 
      'app-header': AppHeader,
      'app-search-panel': AppSearchPanel, 
      'app-footer': AppFooter, 
    },
    metaInfo: {
      title: 'RentFlats - аренда квартир без посредников',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        // { rel: 'stylesheet', href: '/css/index.css' },
        // { rel: 'favicon', href: 'src/assets/img/favicon.png' }
      ]
    },
    data() {
      return {

      }
    },
    methods: {
      
    },
    computed: {
      
    }, 
    watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    mounted() {
      
    }
  }
</script>

<style>
  @import 'assets/css/styles.css';
</style>
