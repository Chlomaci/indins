<template>
  <section class="main">
    <Banner/>
    <Products/>
  </section>
</template>

<script>
import Banner from "~/components/Banner";
import Products from "~/components/Products";
export default {
  components: {
    Banner, Products
  }
}
</script>

<style scoped lang="scss">
.main {
  margin-bottom: 100px;
  margin-left: 40px;
  margin-right: 40px;
}

@media(max-width: 500px){
  .main{
    margin-right: 20px;
    margin-left: 20px;
  }
}
</style>
