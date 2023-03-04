<template>
    <div class="main-container container">
       <!-- <Avviso id="avviso-container" /> -->
        <!--!PROBABILMENTE QUESTO NEWSVIEW DOVRÁ DIVENTARE UN ROUTER-VIEW. AL MOMENTO LA LASCIO STATICA-->
        <NewsView id="news-container"/>
        <RightSideComponent id="rigthside-container" />
    </div>
</template>

<script>
//import Avviso from '@/components/homepage/AvvisoPubblico.vue'
import NewsView from './NewsView.vue';
import RightSideComponent from '../components/homepage/RightSideComponent.vue'
export default {
    name: 'MainView',
    components: {
       // Avviso,
        NewsView,
        RightSideComponent,
    }
}
</script>

<style lang="scss" scoped>
.main-container {
    display: flex;
    //align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0;
    gap: 1rem;
    position: relative;

    #news-container {
        max-width: 80%;
        margin: 0;
        //position: absolute;
        left: 0;
        top: 0;
    }
    #rigthside-container {
        max-width: 20%;
        position: absolute;
        right: 0;
        top: 0;
    }
}
</style>