import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes' //забираем константу 
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

export const router = new VueRouter({
	mode: 'history',
	routes
})