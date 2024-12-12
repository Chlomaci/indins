<template>
  <div class="products__item">
    <div class="products__info">
      <div class="products__img" @click="() => {
        $store.commit('changeCurrentProduct', product.id)
        $store.commit('onModal');
      }">
        <img :src='product.image' :alt='product.title'>
      </div>
      <div class="products__subtitle" @click="() => {
        $store.commit('changeCurrentProduct', product.id)
        $store.commit('onModal');
      }">{{ product.title }}</div>
    </div>
    <button class="products__btn" @click="() => {
      $store.commit('addProducts', product)
      $store.commit('calculateSum')
    }">Купить</button>
  </div>
</template>

<script>
export default {
  props: {
    product:{
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.products{
  height: 100%;
  &__item{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__img{
    margin-bottom: 16px;
    height: 380px;
    width: 100%;
    display: flex;
    justify-content: center;
    &:hover{
      cursor: pointer;
    }
    img{
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  &__subtitle{
    margin-bottom: 16px;
    font-size: 2rem;
    &:hover{
      cursor: pointer;
    }
  }
  &__btn{
    width: 100%;
    height: 55px;
    background-color: white;
    border: 2px rgba(39, 87, 66, 1) solid;
    font-size: 1.5rem;
    color: rgba(39, 87, 66, 1);
    &:hover{
      background-color: rgba(39, 87, 66, 1);
      color: white;
    }
  }
}

@media(max-width: 730px){
  .products{
    &__subtitle{
      font-size: 4vw;
    }
    &__btn{
      font-size: 3vw;
    }
  }
}

@media (max-width: 600px) {
  .products{
    &__btn{
      font-size: 1.5rem;
    }
  }
}

@media(max-width: 400px){
  .products{
    &__subtitle{
      font-size: 2rem;
    }
  }
}

</style>
