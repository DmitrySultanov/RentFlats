<template>
  <footer>
    <div class="container">
      <div class="flex">
        <div>
          <p>© 2013 Снимаем-Сами.ру, Все права защищены</p>
          <p>Снять квартиру/комнату. Аренда без посредников, без агентов, без комиссии.</p>
          <p>Честная и полная база аренды в Санкт-Петербурге. Ежедневное обновление с 9:00 до 21:30 часов.</p>
        </div>
        <div>
          <p>Учимся проверять документы хозяина на квартиру/комнату. Скачать договор найма.</p>
          <p>8 (812) 989-77-84 - техническая поддержка</p>
          <p><a href="#">Реквизиты юридического лица</a></p>
          <p><a href="mailto:info@snimaem-sami.ru">info@snimaem-sami.ru</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
     data(){
      return {

      }
     }
  };
</script>

<style lang="scss" scoped>
  footer{
    border-top: 2px solid rgb(204,0,0);
    padding: 10px 0 15px 0;
    margin-top: 50px;
    // position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    .flex > div{
      width: 50%;

      &:first-child{
        padding-right: 20px;
      }

      p{
        font-size: 10px;
        line-height: 16px;
        margin: 0;
        text-transform: uppercase;
      }
    }
  } 
</style>
