<template>
  <div class="app-container-external">
    <div class="app-container-internal container-fluid px-0">

      <HeaderComponent id="header-component"/>
      <div id="main-view-div">
        <router-view id="main-component"/>
        <RightSideComponent id="rigthside-container" />
      </div>

    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/header/HeaderComponent.vue';
import RightSideComponent from '@/components/homepage/RightSideComponent.vue'
export default {
    components: {
    HeaderComponent,
    RightSideComponent,
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
  position: relative;

  /* #header-component{
    position:absolute;
  } */

  #main-view-div {
    display: flex;
    //align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    //gap: 5rem;
    position: relative;

   #main-component {
      max-width: 80%;
      margin: 0;
      padding-left: 5rem;
      left: 0;
      top: 0;
   }
    #rigthside-container {
      max-width: 17%;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}

</style>
