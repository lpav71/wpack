import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import 'bootstrap';
import "/css/styles.scss";


import { createApp } from 'vue';

const app = createApp({});

import HelloComponent from "./vueComponents/Hello.vue";
app.component('hello', HelloComponent);
import AboutComponent from "./vueComponents/About.vue";
app.component('about', AboutComponent);

app.mount('#app');

