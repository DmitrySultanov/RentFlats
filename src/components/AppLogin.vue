<template>
  <div class="container">
  	<div class="row  justify-content-center">
  		<div class="col-lg-4">
		    <form @submit.prevent>
			  <div class="form-group">
			    <label for="exampleInputEmail1">Email</label>
			    <input type="email" required v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите email">
			    <!-- <small id="emailHelp" class="form-text text-muted">Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.</small> -->
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Пароль</label>
			    <input type="password" required v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Введите пароль">
			  </div>
			  <button type="submit" @click="register()" class="btn btn-primary">Регистрация</button>
			</form>
  		</div>
  	</div>
  </div>
</template>

<script>
	import AuthService from '../services/AuthService' 

 	export default {
	   data () {
	      return {
	        email: '',
	        password: ''
	      }
	   },
	   methods: {
	   	async register() {
	   		const response = await AuthService.register({
	   			email: this.email,
	   			password: this.password
	   		})
	   		console.log(response.data)
	   	}
	   }
   }
</script>

<style lang="scss" scoped>
	form{
		margin-top: 30px;
	}
	.form-group{
		margin-top: 10px;

		label{
			margin-bottom: 5px;
		}
	}
</style>