<template>
  <div id="app">
<!--
Root Foo: {{ rootFoo }} <br/>
Robots Foo: {{ robotsFoo }} <br/>
Users Foo: {{ usersFoo }} <br/>
<br/>

Root getters: {{rootGettersFoo}} <br />
Robots getters: {{robotsGettersFoo}} <br /> -->

    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png" />
              Build-a-bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/build" class="nav-link" exact>
              Build
            </router-link>
          </li>
            <li class="nav-item">
            <router-link to="/employees" class="nav-link" exact>
              Employees CICD
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link to="/cart" class="nav-link cart" exact>
              Cart
            </router-link>
            <div class="cart-items">
              {{ cart.length }}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>
          <main>
      <router-view />
    </main>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'App',
    computed: {
    // object syntax
        ...mapState({
            rootFoo: 'foo',
            robotsFoo: (state) => state.robotsFoo,
            usersFoo: (state) => state.usersFoo,
        }),
        // rootFoo() {
        //   return this.$store.state.foo;
        // },
        // robotsFoo() {
        //   return this.$store.state.robots.foo;
        // },
        // usersFoo() {
        //   return this.$store.state.users.foo;
        // },
        ...mapGetters({ rootGettersFoo: 'foo' }),
        ...mapGetters('robots', { robotsGettersFoo: 'foo' }),
        // robotsGettersFoo() {
        //   return this.$store.getters['robots/foo'];
        // },
        cart() {
            return this.$store.state.robots.cart;
        },
    },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.nav-link{
  text-decoration: none;
  color: inherit;
}

.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

.router-link-active{
  color: white;
}

.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}

.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}

.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;

}

</style>
