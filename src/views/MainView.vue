<template>
    <div class="main-container container d-flex flex-column">
        <AvvisoPubblico id="avviso-container" />
        <div class="news-container d-flex flex-column">
            <h1 id="news-view-title">News</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo!
            </p>
        </div>
    </div>
</template>

<script>
import AvvisoPubblico from '@/components/homepage/AvvisoPubblico.vue'
export default {
    name: 'MainView',
    components: {
        AvvisoPubblico,
    }
}
</script>

<style lang="scss" scoped>
.main-container {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0;
    gap: 1rem;
    position: relative;

    .news-container {
        margin: 0;
        left: 0;
        top: 0;
    }
}
</style>