import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to the library
library.add(faAddressBook, faGithubSquare, faLinkedin, faArrowLeft);

// Create the app
const app = createApp(App);

// Register FontAwesomeIcon as a global component
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the router
app.use(router);

// Disable production tips
app.config.productionTip = false;

// Mount the app
app.mount('#app');
