import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';


import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import PanelMenu from 'primevue/panelmenu';


const app = createApp(App)

app.use(PrimeVue, { ripple: true });
app.component('Menubar', Menubar);
app.component('Button', Button);
app.component('Card', Card);
app.component('PanelMenu', PanelMenu);


app.use(router, PrimeVue)



app.mount('#app')
