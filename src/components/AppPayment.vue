<template>
  <div class="container">
    <h1>Оплата доступа</h1>
    <p>Для просмотра номеров телефонов собственников выберите подходящий пакет доступа и нажмите на кнопку «КУПИТЬ», далее следуйте инструкциям платёжного оператора.</p>
    <form action="" class="form">
    	<fieldset class="form-group">
		    <div class="form-check">
		      	<label class="form-check-label">
		        	<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1"><i></i>
		        	Неограниченно на 5 дней – 750 рублей
		    	</label>
		    </div>
		    <div class="form-check">
		    	<label class="form-check-label">
			        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"><i></i>
			        Неограниченно на 10 дней – 1200 рублей
			    </label>
		    </div>
		    <div class="form-check disabled">
			    <label class="form-check-label">
			        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3"><i></i>
			        50 открытий на 100 дней – 1500 рублей
			    </label>
		    </div>
		</fieldset>
		<button type="submit" class="btn-lg btn btn-success">Купить</button>
    </form>
    <hr>
    <p class="alert alert-info">Создание аккаунта происходит автоматически и не требует от вас дополнительных действий. После покупки на указанный вами адрес электронной почты в течение 1–10 минут будет отправлено письмо содержащее пароль (7 цифр), который необходим в дальнейшем для авторизации на «Снимаем Сами». Логином является указанный вами e-mail.</p>
    <p>Сразу после оплаты и введения логина и пароля в правом верхнем углу страницы вы сможете открывать телефоны – информация о проведённом платеже поступает от платёжного оператора автоматически в течение 1–10 минут.</p>
    <p class="alert alert-dark">ВНИМАНИЕ ! 
	Проект "Снимаем Сами" прошёл государственную регистрацию в установленном законом порядке.
	Оплата доступа к базе собственников "Снимаем Сами" принимается централизованно через надёжных платёжных операторов ROBOKASSA и PAYSTO, с последующим переводом всех поступивших средств на банковский расчётный счёт проекта и уплатой налогов. Безопасность платежей и защита ваших персональных сведений обеспечиваются платёжным оператором посредством использования высокозащищённого протокола передачи данных.</p>
	<hr>
	<h2>Способы оплаты:</h2>
	<ul class="payment-list flex">
		<li>
			<div class="icon"><icon name="money"></icon></div>
			<p><b class="alert-link alert-danger">наличными</b> в салонах Евросеть и Связной (назвать сотруднику салона платёжный код) или через терминалы Qiwi</p>
		</li>
		<li>
			<div class="icon paar-icon"><icon name="cc-paypal"></icon><icon name="cc-amex"></icon></div>
			<p><b class="alert-link alert-danger">электронными деньгами</b>(Qiwi, WebMoney, Яндекс.Деньги, Единый кошелёк и др.)</p>
		</li>
		<li>
			<div class="icon paar-icon"><icon name="cc-visa"></icon><icon name="cc-mastercard"></icon></div>
			<p><b class="alert-link alert-danger">банковской картой</b>(именной картой VISA/MasterCard с привязанной  банком сим-картой)</p>
		</li>
		<li>
			<div class="icon"><icon name="mobile"></icon></div>
			<p><b class="alert-link alert-danger">со счёта мобильного телефона</b>(взимается комиссия за перевод)</p>
		</li>
	</ul>
	<p>Не пугайтесь неизвестности и ошибок, все требуемые от Вас действия интуитивно понятны и радуют простотой исполнения. Ни один лишний рубль с Вас не спишут. 
	Наберите дежурного консультанта и узнайте все подробности ...  +7 (812) 989-77-84; +7 (952) 289-77-84</p>
	<p><b>Если вы пользуетесь нашим сайтом ни в первый раз и указали при проведении платежа тот же e-mail, что и ранее, используйте для авторизации свой прежний пароль.</b></p>
	<p><b>SOS: Если в течение 10 минут после оплаты, вы не получили электронное письмо с паролем (папки "входящие" или "спам") или открытие телефонов будет по-прежнему недоступно, обратитесь в службу поддержки по телефону 8 (812) 989-77-84; 8 (952) 289-77-84 или письмом на электронную почту info@snimaem-sami.ru</b></p>
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
	.payment-list{
		-webkit-justify-content: center;
		justify-content: center;
		padding-left: 0;
		margin-top: 20px;

		li{
			width: 25%;
			text-align: center;
			padding: 0 10px;
			
			.icon{
				width: 100px;
				height: 80px;
				margin: auto;

				svg{
					width: 50%;
					padding: 0 5px;
				}
			}

			svg{
				width: 100%;
				height: 100%;
			}

			.icon.paar-icon{
				width: 180px;
			}

			p{
				font-size: 15px;
			}
		}
	}

	@media (max-width: 768px){
		.payment-list{
			margin-top: 0;
			
			li{
				width: 100%;
			}
		}
	}
</style>