import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobView from '../views/Jobs/JobView.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'
import NotFound from '../views/Jobs/NotFound.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    
  },
  {
    path: '/jobs',
    name: 'job',
    component: JobView
    
  },{
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props:true
    
  },

  // redirects
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  // cathall 404
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
