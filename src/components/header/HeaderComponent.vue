<template>
    <header class="header-container d-flex fixed-top flex-column">
        <div class="header-social d-flex align-items-center justify-content-center gap-4">
            <a href="#">La nostra pagina Facebook</a>
        </div>
        <img src="../../assets/banner.jpg" alt="" class="header-banner">
        <div class="header-inside container d-flex align-items-center justify-content-between px-0">
            <img src="../../assets/logo.jpg" alt="" class="header-logo">
            <NavbarComponent />
        </div>
    </header>
</template>

<script>
import NavbarComponent from './NavbarComponent.vue';

export default {
    name: 'HeaderComponent',
    components: {
        NavbarComponent,
    }
}
</script>

<style scoped lang="scss">
.header-container {
    background-color: #20a5d6;
    width: 100vw;
    position: relative;
    .header-social {
        background-color: #42b983;
        a {
            color: white;
        }
    }
    .header-inside {
        .header-logo {
            width: 10rem;
            height: 111.195px;
        }
        nav {
            padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
}
}
</style>