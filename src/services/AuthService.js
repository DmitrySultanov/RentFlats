import api from './api'

export default {
	register (credentials) {
		return api().post('login', credentials)
	}
}

// AuthService.register({
// 	email: 'testing@gmail.com',
// 	password: '123456'
// })