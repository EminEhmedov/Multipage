<script setup>

import NavbarVue from './components/Navbar.vue';

import { RouterView } from 'vue-router';
import FooterVue from './components/Footer.vue'
</script>


<template>
  <div>
    <NavbarVue/>
    
    <RouterView/>

    <FooterVue/>
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
 created() {
  this.$store.dispatch('mehsulual'),
   this.$store.dispatch('mehsulucartayaz')
 },
}
</script>

<style>
@import url('./assets/common.css');


</style>