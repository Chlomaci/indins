<template>
  <section class="modal">
    <div class="modal__content">
      <div class="modal__header">
        <h2 class="modal__title">{{product.title}}</h2>
        <div class="modal__close" @click="$store.commit('onModal')">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.6668 10.6833L29.3168 8.33331L20.0002 17.65L10.6835 8.33331L8.3335 10.6833L17.6502 20L8.3335 29.3166L10.6835 31.6666L20.0002 22.35L29.3168 31.6666L31.6668 29.3166L22.3502 20L31.6668 10.6833Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div class="modal__card">
        <div class="card__img">
          <img :src='product.image' :alt='product.title'>
        </div>
        <div class="card__content">
          <div class="card__description">
            <div class="description__item description">
              <div class="card__subtitle">Описание</div>
              <div class="card__text ">{{ product.description}}</div>
            </div>
            <div class="description__item">
              <div class="card__subtitle">Категория</div>
              <div class="card__text">{{ product.category }}</div>
            </div>
            <div class="description__item">
              <div class="card__subtitle">Рейтинг</div>
              <div class="card__text">{{ product.rating.rate}}</div>
            </div>
          </div>
          <div class="card__prices">
            <div class="card__total">{{ product.price }} руб.</div>
            <button class="products__btn card__btn" @click="() => {
      $store.commit('addProducts', product)
      $store.commit('calculateSum')
      $store.commit('onModal')
    }">Купить</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
computed: {
  product() {
    return this.$store.state.products[this.$store.state.currentProductId]
  }
}

}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100vw;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  &__close:hover{
    cursor: pointer;
  }
  &__content{
    background-color: white;
    width: 50%;
    height: 85%;

  }
  &__header{
    background-color: #1E4534;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    height: 20%;
  }
  &__card{
    display: flex;
    justify-content: space-between;
    padding: 40px;
    height: 80%;
  }
}

.card {
  &__btn{
    background-color: rgba(39, 87, 66, 1);
    color: white;
  }
  &__subtitle{
    color: #606462;
    margin-bottom: 8px;
    font-size: 1.5rem;
  }
  &__text{
    font-size: 1.5rem;
  }
  &__content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
  }
  &__img{
    width: 40%;
    height: 70%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__total{
    font-weight: 600;
    font-size: 2.5rem;
    margin-bottom: 24px;
  }
  &__description{
    height: 70%;
  }
}

.description__item{
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
}

.description {
  height: 40%;
  .card__text{
    height: 85%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}

@media(max-width: 1400px){
  .card{
    &__content{
      width: 45%;
    }
    &__img{
       width: 50%;
    }
  }
}


@media(max-width: 1250px){
  .modal{
    padding: 20px;
  }
}

@media(max-width: 1050px){
  .modal{
    &__content{
      width: 70%;
    }
  }
}


@media(max-width: 800px){
  .modal{
    &__card{
      flex-direction: column;
      align-items: center;
      overflow-y: scroll;
    }
  }
  .card{
    &__content{
      width: 100%;
    }
    &__img{
      width: 70%;
      margin-bottom: 20px;
    }
    &__description{
      height: 100%;
    }
  }

}

</style>
