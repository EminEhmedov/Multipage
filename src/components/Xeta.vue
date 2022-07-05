<script setup>
import router from "../router";

</script>

<template>
    <div>
      <section class="xeta">
  
<h1>
    Xeta Sehvesindesiniz
</h1>
<button class="btn" @click="eveqayit">
Home Qayit
</button>

      </section>
    </div>
</template>

<style scoped>
.xeta{
    background-color: darkred;
height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
.xeta h1{
    
    color: white ;
    font-size: 50px;
}
</style>


<script>
export default {
    methods: {
        eveqayit(){
          router.push('/')
        }
    },
}
</script>