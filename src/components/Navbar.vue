<script setup>
import { RouterLink } from 'vue-router';

import { mapGetters } from 'vuex';

</script>

<template>
    <div>
        <header class="header">

    <a href="#" class="logo">
        <img src="../assets/Image/logo.png" alt="">
    </a>

    <nav class="navbar">
        <RouterLink to="/" active-class="active">home</RouterLink>
         <RouterLink to="/about" active-class="active">about</RouterLink>
   <RouterLink to="/menu" active-class="active">menu</RouterLink>
    <RouterLink to="/product" active-class="active">products</RouterLink>
           <RouterLink to="/review" active-class="active">review</RouterLink>
              <RouterLink to="/contact" active-class="active">contact</RouterLink>
               <RouterLink to="/blogs" active-class="active">blogs</RouterLink>
    </nav>

    <div class="icons" style="display:flex;">
        <div class="fas fa-search" @click="send" id="search-btn"></div>
        <div class="fas fa-shopping-cart"  @click="cart" id="cart-btn"></div>
        <div class="fas fa-bars" id="menu-btn" @click="menuac"></div>
     <div  id="angry" @click="gecegunduz" style="width:40px; height:40px;">
        <i class="fas fa-sun" style="color:aliceblue; font-size:30px;" ></i>
     </div>
    <!-- -regular fa-face-angry -->
    </div>

    <!-- <div class="search-form">
        <input type="search" id="search-box" placeholder="search here...">
        <label for="search-box" class="fas fa-search"></label>
    </div> -->

    <div class="cart-items-container">
        <div class="cart-item" v-for="key of cartdakinial" :key="key">
           
            <span class="fas fa-times" @click="deleted(key.id)" ></span>
            <img :src="key.img" alt="" style="width:140px ; height:80px;">
            <div class="content">
                <h3>{{key.name}}</h3>
                <div class="price">${{key.praise}}/-</div>
            </div>
        </div>
      
        <a href="#" class="btn">checkout now</a>
    </div>

</header>

<!-- header section ends -->
<form action="" id="search-form">
    <input type="search" placeholder="search here..." name="" id="search-box">
    <label for="search-box" class="fas fa-search"></label>
    <i class="fas fa-times" @click="geri" id="close"></i>
</form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
 
      send(){
         document.querySelector('#search-form').classList.toggle('active');
      }

      ,
      geri(){
         document.querySelector('#search-form').classList.remove('active');
      },
      cart(){
         let navbar = document.querySelector('.navbar')
        let cartItem = document.querySelector('.cart-items-container')
        let searchForm= document.querySelector('#search-form')
        cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
      },
      menuac(){
        let navbar = document.querySelector('.navbar');
  let cartItem = document.querySelector('.cart-items-container')
        let searchForm= document.querySelector('#search-form')
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
      },
      gecegunduz(){
        const daynight=document.querySelector('#angry');
           daynight.querySelector('i').classList.toggle('fa-sun')
    daynight.querySelector('i').classList.toggle('fa-moon')
     document.body.classList.toggle('dark')
   
      },
      deleted(id1){
this.$store.dispatch('cartdansil',id1)
      }
   },
   computed: {
    ...mapGetters(['cartdakinial'])
   },
    
}







</script>

<style scoped>
@import url('../assets/Navbar.css');

</style>