<template>
    <div class="main-container container d-flex flex-column">
        <AvvisoPubblico id="avviso-container" />
        <div class="news-container d-flex flex-column">
            <h1 id="news-view-title">News</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo! Ex voluptatem iusto in, perspiciatis laboriosam doloribus unde fuga voluptatum harum, dicta nemo esse tempore, quos quo soluta quaerat explicabo? Distinctio impedit voluptate voluptatem. Cum reiciendis odio rem perspiciatis aperiam. Velit voluptatem a magnam! Ducimus adipisci nam sint totam, itaque esse similique suscipit, dolorem deserunt sequi saepe consequatur voluptatum sapiente commodi qui minima doloremque laudantium inventore aut vel neque eligendi! Architecto, quidem pariatur voluptatem, ipsam fugiat nobis odio necessitatibus repudiandae hic consequuntur veniam sint? Quia fugiat ipsum inventore error tempore labore vel cum consequatur, exercitationem, porro repellat minus, voluptatibus ullam? Ratione, recusandae commodi? Odit perspiciatis itaque possimus aspernatur nostrum ipsam esse deleniti minus perferendis earum architecto, quis voluptatum maxime recusandae alias fugiat odio tenetur sint pariatur officia quibusdam? Distincstio, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo! Ex voluptatem iusto in, perspiciatis laboriosam doloribus unde fuga voluptatum harum, dicta nemo esse tempore, quos quo soluta quaerat explicabo? Distinctio impedit voluptate voluptatem. Cum reiciendis odio rem perspiciatis aperiam. Velit voluptatem a magnam! Ducimus adipisci nam sint totam, itaque esse similique suscipit, dolorem deserunt sequi saepe consequatur voluptatum sapiente commodi qui minima doloremque laudantium inventore aut vel neque eligendi! Architecto, quidem pariatur voluptatem, ipsam fugiat nobis odio necessitatibus repudiandae hic consequuntur veniam sint? Quia fugiat ipsum inventore error tempore labore vel cum consequatur, exercitationem, porro repellat minus, voluptatibus ullam? Ratione, recusandae commodi? Odit perspiciatis itaque possimus aspernatur nostrum ipsam esse deleniti minus perferendis earum architecto, quis voluptatum maxime recusandae alias fugiat odio tenetur sint pariatur officia quibusdam? Distinctio, voluptatum.
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
        //max-width: 60%;
        margin: 0;
        left: 0;
        top: 0;
    }
}
</style>