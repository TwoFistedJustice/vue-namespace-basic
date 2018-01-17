<template>
<div class="container">
  <div class="row">
    <!-- <button class="btn btn-primary" @click="selectedComponent = 'weNeedHave'">Need/Have</button> -->
  </div>
  <div class="row">
    <app-header></app-header>
    <router-view></router-view>
    <!-- <component v-bind:is="selectedComponent"></component> -->
  </div>
</div>
</template>


<script>
import Header from './Header.vue';
// import weNeedHave from './components/NeedHave.vue';


export default {
  data: function(){
    return {
      // selectedComponent: 'weNeedHave'
    }
    
  },
  components: {
    // weNeedHave,
    appHeader: Header

  }

  
}
</script>

