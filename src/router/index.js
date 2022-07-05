import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../components/Home.vue'
import AboutVue from '../components/About.vue'
import MenuVue from '../components/Menu.vue'
import ReviewVue from '../components/Review.vue'
import ProductsVue  from '../components/Products.vue'
import ContactVue from '../components/Contact.vue'
import XetaVue from '../components/Xeta.vue'
import BlogsVue from '../components/Blogs.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
{
  path:'/',
  name:'Home',
  component:HomeVue
},
{
  path:'/about',
  name:'About',
  component:AboutVue
},
{
  path:'/menu',
  name:'Menu',
  component:MenuVue
},
{
  path:'/product',
  name:'Product',
  component:ProductsVue
},
{
  path:'/review',
  name:'Review',
  component:ReviewVue
},
{
  path:'/contact',
  name:'Contact',
  component:ContactVue
},
{
  path:'/blogs',
  name:'Blogs',
  component:BlogsVue
},
{
  path:'/:caption',
  name:'Xeta',
  component:XetaVue
}
  ]
})

export default router
