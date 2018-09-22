<template>
  <div class="container">
  	<div class="row  justify-content-center">
  		<div class="col-lg-4">
		    <form>
			  <div class="form-group">
			    <label for="exampleInputEmail1">Email</label>
			    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите email">
			    <!-- <small id="emailHelp" class="form-text text-muted">Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.</small> -->
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Пароль</label>
			    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Введите пароль">
			  </div>
			  <button type="submit" class="btn btn-primary">Вход</button>
			</form>
  		</div>
  	</div>
  </div>
</template>

<script>
 	export default {
	    // data: function() {
	    //   return {
	        
	    //   }
	    // },
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