<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{robot.cost | currency}}
          </td>
        </tr>
      </tbody>
    </table>
  <h2 class="sale-items">
      Saved money on these Robots!
  </h2>
   <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{robot.cost | currency}}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
// import CurrencyFilter from '../shared/currency-filter';

export default {
    name: 'ShoppingCart',
    // filters: {
    //   currency: CurrencyFilter,
    // },
    computed: {
        cart() {
            return this.$store.state.robots.cart;
        },
        cartSaleItems() {
            return this.$store.getters['robots/cartSaleItems'];
        },
    },
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }
  .sale-items {
    color: red;
    font-size: 18px;
    margin-top: 50px;
  }
</style>
