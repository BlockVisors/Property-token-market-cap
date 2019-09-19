<template>
  <div id="app">
     <navbar />
     <br/>
     <div></div>
    <h1>Top 30 Property Tokens by MarketCap</h1>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #A7A1AE;
    margin-top: 10px;
  }
</style>
