import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import About from '../components/About.vue'
import Patient from '../components/Patient.vue'
import Dashboard from '../components/Dashboard.vue'
import Contact from '../components/Contact.vue'
import AddPatient from '../components/AddPatient.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/patient',
    // name: 'Patient',
    component: Patient
  },
  {
    path: '/addpatient',
    name: 'AddPatient',
    component: AddPatient
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
