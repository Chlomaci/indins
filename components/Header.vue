<template>
  <header>
    <h1 class="header__title">Штуки</h1>
    <div class="header__menu">
      <NuxtLink to="/">Главная</NuxtLink>
      <NuxtLink to="/">Магазин</NuxtLink>
    </div>
    <div class="header__end">
      <NuxtLink to="/basket">
        <button class="header__basket">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6665 24C9.19984 24 8.01317 25.2 8.01317 26.6667C8.01317 28.1334 9.19984 29.3334 10.6665 29.3334C12.1332 29.3334 13.3332 28.1334 13.3332 26.6667C13.3332 25.2 12.1332 24 10.6665 24ZM2.6665 2.66669V5.33335H5.33317L10.1332 15.4534L8.33317 18.72C8.11984 19.0934 7.99984 19.5334 7.99984 20C7.99984 21.4667 9.19984 22.6667 10.6665 22.6667H26.6665V20H11.2265C11.0398 20 10.8932 19.8534 10.8932 19.6667L10.9332 19.5067L12.1332 17.3334H22.0665C23.0665 17.3334 23.9465 16.7867 24.3998 15.96L29.1732 7.30669C29.2798 7.12002 29.3332 6.89335 29.3332 6.66669C29.3332 5.93335 28.7332 5.33335 27.9998 5.33335H8.27984L7.0265 2.66669H2.6665ZM23.9998 24C22.5332 24 21.3465 25.2 21.3465 26.6667C21.3465 28.1334 22.5332 29.3334 23.9998 29.3334C25.4665 29.3334 26.6665 28.1334 26.6665 26.6667C26.6665 25.2 25.4665 24 23.9998 24Z" fill="#275742"/>
          </svg>
          <div class="basket__counter">{{$store.state.totalQuantity}}</div>
        </button>
      </NuxtLink>
      <div class="header__burger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: rgba(39, 87, 66, 1);
  font-size: 1.5rem;
  font-weight: 500;
  margin-right: 32px;
  &:hover{
    color: rgba(39, 87, 66, 1);
  }
}

header {
  border: 2px rgba(39, 87, 66, 1) solid;
  padding: 12px 24px;
  display: flex;
  color: rgba(39, 87, 66, 1);
  justify-content: space-between;
  align-items: center;
  margin: 24px 40px 12px 40px;
}

.header__basket{
  position: relative;
  background-color: white;
  border: none;
}

.header__burger{
  display: none;
  div {
    height: 5px;
    width: 5vw;
    background-color: rgb(39, 87, 66);
    margin-bottom: 3px;
  }
}
.basket__counter{
  position: absolute;
  top: -4px;
  right: -7px;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #C95103;
  color: white;
  font-size: 10px;
  font-weight: 500;
}

@media (max-width: 600px) {
  .header__burger{
    display: flex;
    flex-direction: column;
  }
  .header__menu {
    display: none;
  }
  .header__end{
    display: flex;
    justify-content: space-between;
    width: 20%;
    align-items: center;
  }
}

@media (max-width: 500px) {
  header{
    margin: 24px 0px 12px 0px;
    width: 100vw;
  }
}

@media (max-width: 400px) {
  .header{
    &__end{
      width: 30%;
    }
    &__burger div {
      width: 8vw;
    }
  }
}



</style>
