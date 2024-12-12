<template>
  <footer class="footer">
    <h2 class="footer__title">Штуки</h2>
    <div class="footer__menu">
      <NuxtLink to="/">Главная</NuxtLink>
      <NuxtLink to="/">Магазин</NuxtLink>
    </div>
    <button class="footer__ask">
      Напиши нам
    </button>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.footer{
  height: 124px;
  background-color: #1E4534;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 24px;
  margin: 0px 40px 24px 40px;
  //position: absolute;
  //bottom: 0;
  &__title{
    font-size: 2rem;
  }
  &__ask{
    border: 2px solid white;
    background-color: #1E4534;
    color: white;
    padding: 12px 16px;
    font-size: 1.5rem;
  }
}

a {
  text-decoration: none;
  font-size: 1.5rem;
  color: white;
  font-weight: 500;
  margin-right: 32px;
  &:hover{
    color: white;
  }
}
@media (max-width: 700px){
  .footer{
    &__ask{
      font-size: 1rem;
    }
    &__title{
      font-size: 1.5rem;
    }
  }
}

@media(max-width: 600px){
  .footer__menu{
    display: none;
  }
}

@media(max-width: 500px){
  .footer{
    margin-left: 0;
    margin-right: 0;
  }
}

@media(max-width: 400px){
  .footer{
    justify-content: center;
    &__title{
      display: none;
    }
  }

}
</style>
