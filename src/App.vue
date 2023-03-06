<template>
  <div class="app-container container-fluid px-0">

      <!-- $ Header e navbar -->
      <HeaderComponent id="header-component"/>

      <!-- $ Main -->
      <div id="main-view-div">
        <!-- *Questo router-view sará il componente dinamico che mostrerá altre views -->
        <router-view id="main-component"/>
        <RightSideComponent id="rightside-container" />
      </div>

      <!-- $ Footer -->
      <Footer id="footer-component"/>

  </div>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import RightSideComponent from '@/components/homepage/RightSideComponent.vue';
import Footer from '@/components/footer/FooterComponent.vue'
export default {
    components: {
    HeaderComponent,
    RightSideComponent,
    Footer,
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
  //width: 100%;
  //height: 100%;
}
.app-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;

  //$ Main
  #main-view-div {
    display: flex;
    justify-content: start;
    height: 100%;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    //gap: 5rem;
    position: relative;

    #main-component {
      max-width: 80%;
      width: 100%;
      height:100%;
      margin: 0;
      padding-left: 5rem;
      padding-top: 2rem;
      left: 0;
      top: 0;
    }
    #rightside-container {
      max-width: 17%;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  /*$ Footer */
  #footer-component {
    position: relative; //FIXME Forse da cambiare
    bottom: 0;
    left: 0;
    right: 0;
  }
}


</style>
