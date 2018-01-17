<template>

<div>
    <div class="row">
        <h1>RoommatesProfile.vue</h1>
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
            techExpected: []
            
        };
        
    }


}
</script>

<style scoped>

</style>
