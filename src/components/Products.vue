<script setup>
import { mapGetters } from 'vuex';

</script>

<template>
    <div>
        <section class="products" id="products">

    <h1 class="heading"> our <span>products</span> </h1>

    <div class="box-container">
    

       <div class="box"   v-for="key of datanialgetirekrana[0]" :key="key">
            <div class="icons">
                <a href="#1" class="fas fa-shopping-cart" @click="sendproductcard(key.id)"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img :src="key.img" alt="" style="width:200px; height:250px;">
            </div>
            <div class="content">
                <h3>{{key.name}}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">${{key.praise}} <span>$20.99</span></div>
            </div>
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
        sendproductcard(id){
this.$store.dispatch('cartagonderstore',id)
        }
    },
    computed: {
        ...mapGetters(['datanialgetirekrana'])
    },
}
</script>

<style scoped>

@import url('../assets/Products.css');

</style>