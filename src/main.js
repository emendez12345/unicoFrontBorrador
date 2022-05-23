import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "primeflex/primeflex.css";
import "../src/assets/css/styles.css";

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";


//COMPONENTES A USAR
import Button from 'primevue/button';
import Card from 'primevue/card';
import Input from 'primevue/inputtext'
import Password from 'primevue/password'
import PanelMenu from 'primevue/panelmenu'
import Menubar from 'primevue/menubar'
//COMPONENTES CREADOS
import Logo from '@/components/logoUnico/Logo.vue';
import MenuLateral from '@/components/MenuLateral/MenuLateral.vue';
import MenuSuperior from '@/components/MenuSuperior/MenuSuperior.vue';
const app = createApp(App);

app.use(router)

//USO DE COMPONENTES
app.component("Button",Button);
app.component("Card",Card);
app.component("Logo",Logo);
app.component("Input",Input);
app.component("Password",Password);
app.component("PanelMenu",PanelMenu);
app.component("Menubar",Menubar);
app.component("MenuLateral",MenuLateral);
app.component("MenuSuperior",MenuSuperior);
app.mount('#app')
