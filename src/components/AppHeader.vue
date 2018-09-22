<template>
  <header>
    <div class="container">
      <div class="head-block">
        <app-mobile-menu></app-mobile-menu>
        <div class="row align-items-center">
          <div class="col">
            <h1><b>RENT<span class="red">FLATS</span></b> - аренда квартир без посредников..</h1>
            <p>Реальные квартиры..Реальные собственники..Проверено</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
              <div class="navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <!-- <a class="nav-link" href="#">Объекты<span class="sr-only">(current)</span></a> -->
                    <router-link class="nav-link" :to="{name: 'home'}">Объекты</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'payment'}">Оплата</router-link>
                  </li>
                  <li class="nav-item dropdown">
                    <v-selectmenu :data="menu" :regular="true" >
                        <button class="nav-link dropdown-toggle">Полезное</button>
                    </v-selectmenu>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" :to="{name: 'placeobject'}">Разместить объект</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" :to="{name: 'contacts'}">Контакты</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link :to="{name: 'login'}" class="nav-link"><fa-icon name="sign-in-alt"></fa-icon> Войти</router-link>
                  </li>
                </ul>
                <span class="important-info-link" v-tooltip="{
                  content: 'Ежедневное (без выходных и праздников) наполнение базы собственников с 9.00 до 22.30 часов. Поддержка пользователей техническими специалистами +7 (812) 989-77-84; +7 (952) 289-77-84. Круглосуточный доступ и возможность оплаты в автоматическом режиме.', 
                  trigger: 'hover',
                  placement: 'right-start',
                }"><i><fa-icon name="info"></fa-icon></i>Важная информация</span>
              </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import AppMobileMenu from './AppMobileMenu.vue';

  export default {
    data(){
      return {
          menu: [
              // {content:'Проверено - без агентов', url : 'http://www.sina.com'}, // как передать роутер-ссылку?
              {content:'Как работать с сайтом?', callback : function(){ this.$router.push({name: 'howtowork'}) }},
              {content:'Проверено - без агентов', callback : function(){ this.$router.push({name: 'withoutagents'}) }},
              {content:'Проверяем документы', callback : function(){ this.$router.push({name: 'checkeddocs'}) }},
              {content:'Консультации (бесплатно)', callback : function(){ this.$router.push({name: 'consultations'}) }},
              {content:'sm_divider'},
              {content:'Бланки документов', callback : function(){ this.$router.push({name: 'payment'}) }}
          ]
      }
    },
    components: {
      "app-mobile-menu" : AppMobileMenu,
    },
  };
</script>

<style lang="scss" scoped>
  h1{
    margin: 5px 0;
    font-size: 2em;
  }

  h1 + p{
    margin-bottom: 10px;
    color: rgb(204,0,0);
  }

  .head-block{
    position: relative;
  }

  .important-info-link{
    color: #fff;
    font-size: 13px;
    cursor: pointer;
    user-select: none;

    &:hover{
      opacity: .6;
      text-decoration: none;
    }

    i{
      font-style: normal;
      display: inline-block;
      margin-right: 5px;
      vertical-align: bottom;
      padding-top: 3px;
      line-height: 13px;
    }
  }
 
  button.nav-link{
    color: rgba(255,255,255,.5);
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .dropdown-toggle::after{
    vertical-align: .155em;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255,255,255,.7);
  }
  .navbar-dark .navbar-nav .active>.nav-link, .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .show>.nav-link {
    color: #fff;
  }
  .navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
    color: rgba(255,255,255,.9);
  }

  .nav-link svg{
    position: relative;
    top: 2px;
  }

  @media (max-width: 991px){
    h1{
      font-size: 1.5em;
    }

    #navbarSupportedContent ul{
      flex-direction: row;
      justify-content: space-between;

      li{
        width: auto;
        line-height: 20px;
      }
    } 
  }

  @media (max-width: 768px){
    h1{
      font-size: 1em;
      padding-right: 40px;

      b{
        font-size: 1.5em;
      }
    }

    .navbar{
      display: none;
    }

    h1 + p{
      margin-bottom: 0;
      font-size: 14px;
      line-height: 18px;
      display: none;
    }
  }
</style>
