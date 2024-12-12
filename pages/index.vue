<template>
  <div class="app">
    <Modal v-if="$store.state.isModal"/>
    <div v-else/>
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Main from "~/pages/main";
import Footer from "~/components/Footer";
import Modal from "~/components/Modal";
export default {
  name: 'IndexPage',
  components: {
    Header, Main, Footer, Modal,
  },
  mounted() {
    this.$store.dispatch('fetchCards')
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app {
  /*//padding: 24px 40px;*/
  font-family: "Ubuntu", sans-serif;
  color: rgba(39, 87, 66, 1);
  position: relative;
}

button:hover{
  cursor: pointer;
}
</style>
