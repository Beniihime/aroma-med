import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'primeicons/primeicons.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import AOS from 'aos';
import 'aos/dist/aos.css';

import CustomScrollbar from 'custom-vue-scrollbar'
import 'custom-vue-scrollbar/dist/style.css';

const app = createApp(App);
AOS.init({
    // disableMutationObserver: true
})
app.component(CustomScrollbar.name, CustomScrollbar);
app.mount('#app')