<template>

<div>
    <div class="row">
        <h1>ProfilesMenu.vue</h1>
       <h3>Features and Breakdown of this component</h3>
            <ul>
                <li v-for="feature in componentFeatures"><p><b>{{feature}}</b></p></li>
            </ul>

        
        <p><b>Anticipated:Techniques</b> </p>
        <ul v-for="tech in techExpected">
            <li><p>{{tech}}</p></li>
        </ul>
        
    </div>
      <div class="row">
                    <!-- <router-link to="homeProfile" 
                   tag="li" 
                   active-class="" exact><a>homeProfile</a></router-link>
      
      <router-link to="potentialRoommates" 
                   tag="li" 
                   active-class="" exact><a>potentialRoommates </a></router-link>

      <router-link to="roommateProfiles" 
                   tag="li" 
                   active-class="" exact><a>roommateProfiles </a></router-link> -->

         
      </div>
</div>
</template>




<script>


export default {
    props:[],
    data: function(){
        return {
            changesToMake:[],
            componentFeatures: [],
            techExpected: [
                'Route Parameters - lecture 229',

            ]
            
        };
        
    }


}
</script>

<style scoped>

</style>
