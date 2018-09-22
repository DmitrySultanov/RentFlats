import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import { router } from './router'
import { routes } from './routes'
import { sync } from 'vuex-router-sync'
import store from './store/index'
import FaIcon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
import VTooltip from 'v-tooltip' //тултип
import YmapPlugin from 'vue-yandex-maps' // яндекс карты
import vSelectMenu from 'v-selectmenu' //дропдаун https://terryz.github.io/vue/#/selectmenu/demo 

Vue.component('fa-icon', FaIcon)
Vue.use(vSelectMenu);
Vue.use(YmapPlugin);
Vue.use(VueResource);
Vue.use(VTooltip);

// глобальная регистрация компонентов
// import Header from './components/header.vue';
// import SearchPanel from './components/searchPanel.vue';
// import Flats from './components/flats.vue';
// import Flat from './components/flat.vue';
// import Contacts from './components/contacts.vue';

// Vue.component('appHeader', Header);
// Vue.component('appSearchPanel', SearchPanel);
// Vue.component('appFlats', Flats);
// Vue.component('appContacts', Info);
// Vue.component('appFlat', Room);

sync(store, router)

new Vue({
  	el: '#app',
	router,
	store,
  	render: h => h(App)
})
