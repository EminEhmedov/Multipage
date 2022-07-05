<script setup>
 import { mapGetters } from 'vuex';
</script>


<template>
    <div>
        <section class="about" id="about">

    <h1 class="heading"> <span>about</span> us </h1>

    <div class="row"  v-for="key of datanialgetirekrana[0]" :key="key">

        <div class="image">
            <img :src="key.img" alt="" style="width:540px; height:400px;">
        </div>

        <div class="content">
            <h3>what makes our {{key.name}} special?</h3>
           <p>{{key.about}}</p>
           <p>{{key.about}}</p>
           <a href="#" class="btn">learn more</a>
        </div>

    </div>
      

</section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
     computed: {
        ...mapGetters(['datanialgetirekrana'])
    },
}
</script>

<style scoped>

@import url('../assets/About.css');


</style>