<template>
  <div class="container">
    <div class="flats flex">
      <app-flat v-for="(flat, i) in flats" :key="flat.id" :flat="flat" :index="(i+1)"></app-flat>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import _ from 'lodash';
  import AppFlat from './AppFlat.vue';

  export default {
    data() { 
      return {
        flats: []
      }
    },
    components: {
      "app-flat" : AppFlat,
    },
    methods: {
     
    },
    created() {
      Vue.http.get('src/flats.json')
        .then(response => response.json())
        .then(flats => {
            this.flats = flats
        })
        .catch(err => {
          console.log(err)
      })
    },
  }
</script>

<style lang="scss" scoped>
  .flats{
    margin: 20px -.5%;
  }

  @media (max-width: 768px){
    .flats{
      margin: 20px 0;
      -webkit-justify-content: space-between;
      justify-content: space-between;
    }
  }

  @media (max-width: 576px){

  }
</style>

