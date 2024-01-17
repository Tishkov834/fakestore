import { createApp } from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from '@/components/App';

const app = createApp(App);

app.use(Toast);
app.mount('#app');
