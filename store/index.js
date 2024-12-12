const state = () => ({
  isModal: false,
  isLoading: false,
  products: [],
  addedProducts: [],
  currentProductId: 0,
  totalQuantity: 0,
  total: 0,
})

const getters = {
  getProducts(state) {
    return state.products;
  }
}

const mutations = {
  onModal(state) {
    state.isModal = !state.isModal;
  },
  onFetchCards(state, products) {
    state.products = products;
  },
  onLoading(state) {
    state.isLoading = !state.isLoading;
  },
  changeCurrentProduct(state, payload) {
    state.currentProductId = payload - 1;
  },
  addProducts(state, payload) {
    let parsedPrice;
    const currentProduct = state.addedProducts.find(e => e.id === payload.id);
    if (!currentProduct) {
      state.addedProducts = [...state.addedProducts, payload];
      const index = state.addedProducts.indexOf(payload);
      state.addedProducts[index].count++;
      state.addedProducts[index].totalPrice =  state.addedProducts[index].price
        .toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    } else {
      state.addedProducts = state.addedProducts.map(e => {
        if (e.id === payload.id) {
          e.count++;
          let parsedPrice = parseInt(e.totalPrice);
          parsedPrice +=  e.price;
          e.totalPrice = parsedPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
        }
        return e
      })
    }
  },
  deleteProduct(state, payload) {
    state.addedProducts = state.addedProducts.filter(card => card.id !== payload.id);
  },
  calculateSum(state) {
    const moreThanZero = state.addedProducts.filter(card => card.count !== 0);
    if (moreThanZero.length) {
      const moreThanZeroSum = moreThanZero.map(card => {
        return parseInt(card.totalPrice);
      });
      let total = moreThanZeroSum.reduce((currentSum, currentNumber) => (currentSum + currentNumber));
      const sum = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
      const quantity = state.addedProducts.map(card => card.count).reduce((currentSum, currentQuantity) => (currentSum + currentQuantity));
      state.totalQuantity = quantity;
      state.total = sum;
    } else {
      state.total = 0;
      state.totalQuantity = 0;
    }
  },
  roundPrice(state) {
    state.products.forEach(e => e.price = Math.round(e.price))
  },
  addCounters(state) {
    state.products.forEach(e => {
      e.count = 0;
      e.totalPrice = 0;
    })
  }
}

const actions = {
  async fetchCards({state, commit}) {
    commit('onLoading');
    await fetch('https://fakestoreapi.com/products?limit=6')
      .then(res=>res.json())
      .then(json => {
        commit('onFetchCards', json);
        commit('roundPrice');
        commit('addCounters');
        commit('onLoading');
        }
      )
  }
}

export default {state, getters, mutations, actions}
