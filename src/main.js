import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HelloWorld from './components/HelloWorld.vue'
import TheNav from './components/UI/TheNav.vue'
import TheFooter from './components/UI/TheFooter.vue'
import Projects from './components/Projects.vue'
import 'boxicons'

const app = createApp(App)
app.use(router);

app.component('hello-world', HelloWorld);
app.component('projects', Projects);

app.component('the-nav', TheNav);
app.component('the-footer', TheFooter);


app.mount('#app');