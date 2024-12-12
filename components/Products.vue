<template>
  <section class="products">
    <h2 class="products__title">Новинки</h2>
    <div class="products__grid" v-if="!isLoading">
      <ProductCard v-for="product in $store.state.products" :product="product" :key="product.id"/>
    </div>
    <div v-else>Загрузка...</div>
  </section>
</template>

<script>
import ProductCard from "~/components/ProductCard";
export default {
  components: {
    ProductCard
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    }
  },
}
</script>

<style lang="scss">
.products{
  padding-top: 24px;
  &__title{
    margin-bottom: 40px;
    text-align: center;
    font-size: 3rem;
  }
  &__grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    column-gap: 50px;
    row-gap: 45px;
  }
}

@media(max-width: 600px){
  .products{
    &__grid{
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media(max-width: 400px){
  .products{
    &__grid{
      grid-template-columns: 1fr;
    }
  }
}
</style>
