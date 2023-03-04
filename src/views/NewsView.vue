<template>
<div class="container news-container align-content-center py-2">
    <AvvisoPubblico id="avviso-container" />
    <h1 id="news-view-title">News</h1>
    <div class="newscard-container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo! Ex voluptatem iusto in, perspiciatis laboriosam doloribus unde fuga voluptatum harum, dicta nemo esse tempore, quos quo soluta quaerat explicabo? Distinctio impedit voluptate voluptatem. Cum reiciendis odio rem perspiciatis aperiam. Velit voluptatem a magnam! Ducimus adipisci nam sint totam, itaque esse similique suscipit, dolorem deserunt sequi saepe consequatur voluptatum sapiente commodi qui minima doloremque laudantium inventore aut vel neque eligendi! Architecto, quidem pariatur voluptatem, ipsam fugiat nobis odio necessitatibus repudiandae hic consequuntur veniam sint? Quia fugiat ipsum inventore error tempore labore vel cum consequatur, exercitationem, porro repellat minus, voluptatibus ullam? Ratione, recusandae commodi? Odit perspiciatis itaque possimus aspernatur nostrum ipsam esse deleniti minus perferendis earum architecto, quis voluptatum maxime recusandae alias fugiat odio tenetur sint pariatur officia quibusdam? Distincstio, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo! Ex voluptatem iusto in, perspiciatis laboriosam doloribus unde fuga voluptatum harum, dicta nemo esse tempore, quos quo soluta quaerat explicabo? Distinctio impedit voluptate voluptatem. Cum reiciendis odio rem perspiciatis aperiam. Velit voluptatem a magnam! Ducimus adipisci nam sint totam, itaque esse similique suscipit, dolorem deserunt sequi saepe consequatur voluptatum sapiente commodi qui minima doloremque laudantium inventore aut vel neque eligendi! Architecto, quidem pariatur voluptatem, ipsam fugiat nobis odio necessitatibus repudiandae hic consequuntur veniam sint? Quia fugiat ipsum inventore error tempore labore vel cum consequatur, exercitationem, porro repellat minus, voluptatibus ullam? Ratione, recusandae commodi? Odit perspiciatis itaque possimus aspernatur nostrum ipsam esse deleniti minus perferendis earum architecto, quis voluptatum maxime recusandae alias fugiat odio tenetur sint pariatur officia quibusdam? Distinctio, voluptatum.
    </div>
</div>
</template>

<script>
import AvvisoPubblico from '@/components/homepage/AvvisoPubblico.vue'

export default {
    name: 'NewsView',
    components: {
        AvvisoPubblico
    }
}
</script>

<style lang="scss" scoped>
.news-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    gap: 1rem;
}
#news-view-title {
    text-transform: uppercase;
}
</style>
