import AppFlats from './components/AppFlats.vue'
import AppFlatExpanded from './components/AppFlatExpanded.vue'
import AppContacts from './components/AppContacts.vue'
import AppPayment from './components/AppPayment.vue'
import AppHowToWork from './components/AppHowToWork.vue'
import AppWithoutAgents from './components/AppWithoutAgents.vue'
import AppCheckedDocs from './components/AppCheckedDocs.vue'
import AppConsultations from './components/AppConsultations.vue'
import AppLogin from './components/AppLogin.vue'
import AppPlaceObject from './components/AppPlaceObject.vue'


export const routes = [
	{
		path: '/',
		component: AppFlats,
		name: 'home'
	},
	{
		path: '/contacts',
		component: AppContacts,
		name: 'contacts'
	},
	{
		path: '/flat/:id',
		component: AppFlatExpanded,
		name: 'flat-expanded',
		props: true
	},
	{
		path: '/payment',
		component: AppPayment,
		name: 'payment'
	},
	{
		path: '/howtowork',
		component: AppHowToWork,
		name: 'howtowork'
	},
	{
		path: '/withoutagents',
		component: AppWithoutAgents,
		name: 'withoutagents'
	},
	{
		path: '/checkeddocs',
		component: AppCheckedDocs,
		name: 'checkeddocs'
	},
	{
		path: '/consultations',
		component: AppConsultations,
		name: 'consultations'
	},
	{
		path: '/login',
		component: AppLogin,
		name: 'login'
	},
	{
		path: '/placeobject',
		component: AppPlaceObject,
		name: 'placeobject'
	},
	{
		path: '*',
		component: AppFlats
	}
]