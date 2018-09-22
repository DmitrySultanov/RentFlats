<template>
  <div class="mvmenu-container">
    <button type="button" @click="mMenuOpen" class="mvmenu-gamburger"><fa-icon name="bars"></fa-icon></button>
    <div class="mvmenu mvmenu--left">
      <div class="logo">RENT<span class="red">ROOM</span></div>
      <ul>
        <li><span @click="mMenuOpen"><router-link class="nav-link" :to="{name: 'home'}">Объекты</router-link></span></li>
        <li><span @click="mMenuOpen"><router-link class="nav-link" :to="{name: 'payment'}">Оплата</router-link></span></li>
        <li><span @click="mMenuOpen"><router-link class="nav-link" :to="{name: 'placeobject'}">Разместить объект</router-link></span></li>
        <li><span @click="mMenuOpen"><router-link class="nav-link" :to="{name: 'contacts'}">Контакты</router-link></span></li>
        <li><span @click="mMenuOpen"><router-link class="nav-link" :to="{name: 'login'}"><fa-icon name="sign-in-alt"></fa-icon> Войти</router-link></span></li>

        <li><span @click="mMenuOpen"><router-link class="nav-link" :to="{name: 'howtowork'}">Как работать с сайтом?</router-link></span></li>
        <li><span @click="mMenuOpen"><router-link class="nav-link" :to="{name: 'withoutagents'}">Проверено - без агентов</router-link></span></li>
        <li><span @click="mMenuOpen"><router-link class="nav-link" :to="{name: 'checkeddocs'}">Проверяем документы</router-link></span></li>
        <li><span @click="mMenuOpen"><router-link class="nav-link" :to="{name: 'consultations'}">Консультации (бесплатно)</router-link></span></li>
        <li><span @click="mMenuOpen"><router-link class="nav-link" :to="{name: 'payment'}">Бланки документов</router-link></span></li>
      </ul>
    </div>
    <div class="site-overlay" @click="mMenuClose" id="site-overlay"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
          
      }
    },
    methods: {
      mMenuOpen() {
        var classList = document.body.classList;
        classList.toggle("mvmenu-opened");
      },
      mMenuClose() {
        var classList = document.body.classList;
        classList.remove("mvmenu-opened");
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mvmenu {
    position: fixed;
    width: 200px;
    height: 100%;
    top: 0;
    z-index: 9999;
    background: #efefef;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    transition: transform 0.2s cubic-bezier(0.16, 0.68, 0.43, 0.99);

    &.mvmenu--left{
      left: 0;
    }
    &.mvmenu--right{
      right: 0;
    }

    ul{
      padding-left: 0;

      .nav-link{
        padding: .4rem 0rem;
        padding-left: 20px;
        color: rgba(0,0,0, .8);
        font-size: 16px;
        line-height: 18px;

        &.router-link-exact-active{
          background: rgba(0,0,0, .1);
          color: #000;
        }

        svg{
          position: relative;
          top: 3px;
        }
      }
    }

    .logo{
      color: #000;
      margin: 10px 20px 5px 20px;
      font-size: 18px;

      b{
        vertical-align: top;
      }
    }
  }

  .mvmenu-container{
    position: relative;
    z-index: 44;
  }

  .mvmenu--left{
    -webkit-transform: translate3d(-200px, 0, 0);
    -ms-transform: translate3d(-200px, 0, 0);
    transform: translate3d(-200px, 0, 0);
  }

  .mvmenu--right{
    -webkit-transform: translate3d(200px, 0, 0);
    -ms-transform: translate3d(200px, 0, 0);
    transform: translate3d(200px, 0, 0);
  }

  .mvmenu-gamburger{
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 0;
    line-height: 30px;
    padding: 0;
    border: 1px solid #555;
    color: #222;
    border-radius: 3px;
    background-color: transparent;
    box-sizing: border-box;
    padding-top: 1px;
    z-index: 44;
    cursor: pointer;
    outline: none;
    display: none;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .site-overlay {
    display: none;
  }


  .mvmenu-opened .mvmenu,
  .mvmenu-opened .mvmenu {
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .mvmenu-opened .site-overlay,
  .mvmenu-opened .site-overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9998;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-animation: fade 500ms;
    animation: fade 500ms;
  }

  @media (max-width: 768px){
    .mvmenu-gamburger{
      display: inline-block;
    }
  }
</style>
