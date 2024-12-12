<template>
  <section class="basket">
    <h2>Корзина</h2>
    <div class="basket__grid">
      <div class="basket__row header">
        <div class="basket__title name">Товар</div>
        <div class="basket__title price">Цена, руб</div>
        <div class="basket__title quantity">Кол-во</div>
        <div class="basket__title total">Сумма, руб</div>
      </div>
      <div class="basket__row noEmpty" v-if="$store.state.addedProducts.length > 0">
        <div class="basket__row products" v-for="product in $store.state.addedProducts" :key="product">
          <div class="basket__title name">{{product.title}}</div>
          <div class="basket__title price">{{product.price}}</div>
          <div class="basket__title quantity">{{product.count}}</div>
          <div class="basket__title total">{{product.totalPrice}}</div>
          <button class="basket__delete" @click="() => {
            $store.commit('deleteProduct', product);
            $store.commit('calculateSum');
          }">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00024 19.5C6.00024 20.6 6.90024 21.5 8.00024 21.5H16.0002C17.1002 21.5 18.0002 20.6 18.0002 19.5V9.5C18.0002 8.4 17.1002 7.5 16.0002 7.5H8.00024C6.90024 7.5 6.00024 8.4 6.00024 9.5V19.5ZM18.0002 4.5H15.5002L14.7902 3.79C14.6102 3.61 14.3502 3.5 14.0902 3.5H9.91024C9.65024 3.5 9.39024 3.61 9.21024 3.79L8.50024 4.5H6.00024C5.45024 4.5 5.00024 4.95 5.00024 5.5C5.00024 6.05 5.45024 6.5 6.00024 6.5H18.0002C18.5502 6.5 19.0002 6.05 19.0002 5.5C19.0002 4.95 18.5502 4.5 18.0002 4.5Z" fill="#C7C7C7"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="basket__row empty" v-else>Корзина пуста</div>
      <div class="basket__row footer">
        <div class="basket__title name">Итого</div>
        <div></div>
        <div class="basket__title total__quantity">{{$store.state.totalQuantity}}</div>
        <div class="basket__title total__sum">{{$store.state.total}}</div>
      </div>
    </div>
    <div class="basket__footer">
      <button class="products__btn">Плачу за всё!</button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.basket{
  margin: 30px 40px 140px 40px;
  h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 3rem;
  }
  &__grid{
    display: grid;
    margin-bottom: 60px;
    border: #1E4534 2px solid;
  }
  &__row{
    font-size: 1.3rem;
    border-top: #1E4534 1px solid;
    border-bottom: #1E4534 1px solid;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
    &.noEmpty{
      grid-template-columns: 1fr;
    }
    &.empty{
      display: block;
      text-align: center;
    }
    &.products{
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
      padding: 20px 20px;
    }
    &.header, &.footer, &.empty{
      padding: 20px 20px;
    }
  }
  &__row:first-child{
    border-top: none;
  }
  &__row:last-child{
    border-bottom: none;
  }
  &__row.header{
    font-weight: bold;
  }
  &__footer{
    display: flex;
    justify-content: flex-end;
    .products__btn{
      width: 20%;
      background-color: #1E4534;
      color: white;
    }
  }
  &__delete{
    background-color: white;
    border: none;
  }
}

@media (max-width: 950px) {
  .basket__footer .products__btn{
    width: 40vw;
  }
}

@media (max-width: 500px) {
  .basket{
    margin-right: 0;
    margin-left: 0;
  }
}



</style>
