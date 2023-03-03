<template>
  <div class="app-container-external">
    <div class="app-container-internal container-fluid px-0">
      <HeaderComponent />
      <MainView />
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/header/HeaderComponent.vue';
import MainView from './views/MainView.vue';
export default {
    components: {
    HeaderComponent,
    MainView
  }
}

</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
ul {
    list-style: none;
}
a {
    text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-container-external {
  width: 100vw;
  margin: 0;
  padding: 0;
}

</style>
