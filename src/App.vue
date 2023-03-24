<template>
  <div class="container-fluid px-0 h-auto d-flex flex-column justify-content-center" id="app-interno">

      <!-- $ Header e navbar -->
      <HeaderComponent id="header-component" />

      <!-- $ Main con componenti dinamici -->
      <div id="main-component">
        <router-view id="main-router-component"/>
        <RightSideComponent id="right-component" />
      </div>

      <!-- FIXME Footer deve trovarsi in fondo, attaccato alla pagina, sotto il main-->

      <Footer id="footer-component" class="sticky-bottom"/>

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
    text-align: left;
}
a {
    text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;

  /* #app-interno {
    width: 100%;
    min-height: 100%;
  } */

  // Header
  #header-component{
    //
}

.main-area-header {
    background-color: rgb(234, 234, 234);
    position: absolute;
    z-index: 3;
    top: 0; left: 0; right: 0;
    top: 0;
    left: 0;
    right: 0;
    max-height: 100%;
  }

  // Main
  #main-component {
    display: flex;
    justify-content: start;
    //height: 100%;
    width: 100%;
    max-width: 1400px;
    //max-height: 1400px;
    margin: 0 auto;
    //gap: 5rem;
    //top: 479.913px; //FIXME aggiusta

    #main-router-component {
      max-width: 80%;
      width: 100%;
      height:100%;
      margin: 0;
      padding-left: 5rem;
      padding-top: 2rem;
      left: 0;
      top: 0;
    }

    #right-component {
      max-width: 17%;
      height: 100%;
      right: 0;
      top: 0;
    }
  }

  // Footer
  #footer-component {
    max-height: 100%;
  }
}
</style>
