<template>
  <section class="banner">
    <div class="banner__text">
      <div class="banner__subtitle">Смотри внимательно <br> сколько всего у нас есть</div>
      <h2 class="banner__title">Магазин очень <br> нужных штуковин</h2>
    </div>
    <div class="banner__img">
      <img src="../static/publicity.png" alt="Banner">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.banner {
  width: 100%;
  height: 573px;
  background-color: #1E4534;
  color: white;
  padding: 36px 40px 48px 40px;
  position: relative;
  margin-bottom: 60px;
  &__img{
    position: absolute;
    bottom: -5px;
    right: 36px;
    z-index: 0;
  }
  &__text{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    z-index: 1;

  }
  &__subtitle{
    font-size: 3rem;
  }
  &__title{
    font-size: 5rem;
  }
}
@media (max-width: 1270px) {
  .banner__img{
    filter: brightness(80%);
  }
}

@media(max-width: 885px) {
  .banner{
    &__subtitle{
      font-size: 2rem;
    }
    &__title{
      font-size: 3rem;
    }
  }
}

@media (max-width: 550px) {
  .banner{
    display: none;
  }
}
</style>
