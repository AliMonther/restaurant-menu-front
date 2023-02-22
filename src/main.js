import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import router from "./routers/main";
import { createPinia } from "pinia";
import 'sweetalert2/dist/sweetalert2.min.css';
import "primeflex/primeflex.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primeicons/primeicons.css";


const app = createApp(App)
    .use(createPinia())
    .use(router)
    .use(VueSweetalert2);

app.mount("#app");
