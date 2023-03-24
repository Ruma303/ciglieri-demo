<template>
    <div class="main-container container d-flex flex-column">
        <AvvisoPubblico id="avviso-container" />
        <div class="news-container d-flex flex-column">
            <h1 id="news-view-title">News</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquam magni ab odit tempore aliquid facere maiores, necessitatibus ipsum, laudantium quibusdam ex sapiente alias delectus quo quasi sit possimus tempora!
            Incidunt, nulla id, totam quaerat minima officiis fugit placeat aliquid porro distinctio ipsum dolores recusandae sint iure est quas rerum. Earum accusantium debitis reprehenderit cumque, labore dolorum ea quae eveniet.
            Voluptate earum dolore recusandae aliquam expedita, doloremque culpa dignissimos perferendis! Amet facilis consequatur minima, porro veritatis unde, quidem, nemo accusamus autem enim tempore sequi. Porro dignissimos corrupti ea ipsum sapiente?
            Hic quibusdam excepturi inventore labore sunt beatae autem possimus laboriosam, minus cumque ea, asperiores earum officia corporis deserunt accusamus, dolor voluptates assumenda dicta est! Pariatur inventore expedita reiciendis nam eligendi.
            Corrupti obcaecati quia itaque debitis expedita iure laboriosam excepturi eum accusamus, cum vel assumenda incidunt praesentium? Tenetur officia consequuntur eius architecto! Temporibus distinctio nostrum dolorum delectus corporis debitis laborum harum?
            Doloribus iusto nulla assumenda quas officiis tempora, saepe odit, optio minima facere cum ea quia eum nemo nihil a est deleniti excepturi quidem, perferendis eaque. Voluptas ipsum cum eos aliquam?
            Ad, dolor! In quasi consequuntur molestias dolores, necessitatibus quo facilis minima pariatur praesentium sapiente nisi debitis quis saepe animi ducimus. Error ad vitae perferendis adipisci nostrum velit necessitatibus tempore itaque.
            Reiciendis rem ratione eum tempore. Ex ducimus doloribus quibusdam nisi excepturi fugit accusantium, praesentium numquam modi sapiente? Consequatur, doloremque quod! Impedit debitis similique autem a maiores quas ut soluta recusandae.
            Amet, aspernatur enim? Excepturi recusandae architecto magni vero dolor dolores suscipit, animi veritatis ut id pariatur quod nemo sit facere laborum? Voluptate, nesciunt delectus quae eius doloribus illum aut deserunt.
            Vel fuga doloremque vitae adipisci voluptas, vero minus excepturi nam tempore quaerat molestiae quod fugit, accusamus error quasi libero? Earum reprehenderit quam, nam ut facilis mollitia similique quos veniam doloribus.
            Ab atque eligendi maiores laborum recusandae et. Magnam ratione, saepe minus perferendis eos accusamus enim consequatur quasi voluptas? Molestias doloremque hic vero facere in commodi molestiae ipsam at laborum totam.
            Ipsam velit sit laboriosam tempora perspiciatis suscipit eaque, aliquam officia facilis, delectus fugiat quae nisi. Temporibus unde quos eaque saepe obcaecati maxime, quasi rerum animi nam voluptatibus impedit. Provident, repellat!
            Aut, alias. Ducimus sequi distinctio similique, eos cum tempora fugit, porro soluta, assumenda voluptatum cupiditate modi doloribus aliquid ea dignissimos et. Est consequatur commodi harum autem consequuntur suscipit, aut vero?
            Libero placeat soluta nobis deserunt consequuntur mollitia error expedita, ea explicabo, voluptatem a sunt natus, beatae recusandae accusantium perspiciatis? Aspernatur cumque animi obcaecati odit harum quas placeat quod asperiores doloremque.
            Ullam nulla officiis quae a nam possimus maiores perspiciatis minus reiciendis ab? Corporis, quia reiciendis saepe perferendis et, quos iusto, excepturi eveniet quaerat soluta facere fugiat voluptas. Vero, harum libero?
            Voluptatem quaerat incidunt fugit dolores suscipit doloribus maxime. Praesentium natus dignissimos, debitis vero dolorem repellat numquam eaque nisi! Iste ullam adipisci, omnis fugit eos voluptatum ratione esse maiores nostrum ad!
            Nostrum et modi delectus repellendus sit consequuntur placeat quia ducimus vero, aliquid nisi. Asperiores consectetur autem doloribus, tempora ratione atque esse, eaque neque consequuntur, voluptatem omnis a reprehenderit blanditiis illum.
            Minus in eius blanditiis architecto, id nesciunt? Harum inventore, aperiam facilis corporis itaque, soluta temporibus eligendi laborum, autem cum tempore sint doloremque. Laudantium doloremque officia distinctio, reprehenderit nam ea voluptates!
            Ad libero minus praesentium corrupti nemo ab, expedita aspernatur nam perspiciatis. Mollitia consectetur ipsum dicta nulla sit, optio ipsam minus! Cupiditate vitae alias obcaecati beatae nostrum, placeat voluptatem cumque corporis?
            Optio omnis officia harum consequatur vero, deserunt quasi vel. At unde, impedit atque facilis quaerat, nostrum eaque eos dicta voluptas doloribus est officia inventore sit. Inventore aliquid perspiciatis est alias?
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
    justify-content: start;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0;
    gap: 1rem;

    .news-container {
        margin: 0;
        //left: 0;
        //top: 0;

    }
}
</style>