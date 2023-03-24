<template>
    <div class="main-container container d-flex flex-column">
        <AvvisoPubblico id="avviso-container" />
        <div class="news-container d-flex flex-column">
            <h1 id="news-view-title">News</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem similique omnis impedit architecto repellendus nam error aperiam assumenda et, blanditiis doloribus nobis vero quos nulla. Laborum nesciunt id quos?
            Blanditiis est, nobis consequuntur officiis, dolorum saepe atque sed minima illo quis pariatur corrupti, assumenda suscipit eaque? Facere non iusto, quasi placeat veniam blanditiis facilis sapiente, corporis, ullam nulla nostrum!
            Laudantium cupiditate modi, hic rerum sapiente officiis. Quos, est minus saepe necessitatibus incidunt nam veniam neque accusantium vitae natus! Molestias, aliquam rem? Natus praesentium eveniet perferendis alias totam animi! Harum?
            Iure ad mollitia vel odit hic, doloremque explicabo corporis. Reprehenderit mollitia placeat molestiae aliquam nostrum iste soluta, excepturi, ex at rerum distinctio. Ipsa pariatur dicta dolorem voluptatum architecto dolore libero.
            Fuga, obcaecati quas deleniti voluptate iure fugiat quisquam officia pariatur reiciendis voluptatem fugit possimus, ipsum nihil labore non dicta reprehenderit illo esse placeat at, beatae a? Eius quod facere accusantium!
            Fugit sint minima ipsum error aspernatur debitis recusandae necessitatibus sapiente maxime nisi ab sequi quia facilis omnis magni earum asperiores id in, ipsa totam quidem voluptatum perferendis. Dignissimos, reprehenderit perspiciatis.
            Unde ducimus consequuntur dolore omnis, cum impedit, molestias autem animi, ipsa tenetur rem minus ipsam velit necessitatibus at architecto repudiandae inventore amet iste repellendus veniam. Consequuntur voluptatum totam vitae ab.
            Labore in autem et dolorem accusamus hic minima, quia quae architecto delectus nobis eum saepe doloribus explicabo, odit modi quasi itaque odio voluptatum aliquam, aperiam dignissimos. Unde incidunt nemo eaque?
            Architecto, harum. Blanditiis architecto, sequi, illo aut pariatur eum cumque, quos laboriosam esse velit ullam eveniet qui labore nulla facere. Voluptatem numquam ea exercitationem nisi veniam ut, beatae sapiente magnam.
            Sed eos laboriosam cumque ipsum sunt, blanditiis dolorum vitae fugit perferendis neque vero totam pariatur quo nemo deserunt exercitationem. Cupiditate veritatis fugit, distinctio rerum laudantium incidunt? Temporibus minus ipsa aliquam!
            Ullam corrupti esse illo cumque consequuntur repellendus accusamus, sequi officiis consectetur est, vero laudantium sed perspiciatis rerum maxime inventore, recusandae eveniet ipsum blanditiis voluptatibus placeat eaque voluptates deleniti consequatur? Itaque.
            At asperiores minus dignissimos aspernatur placeat beatae obcaecati fugiat dolor laboriosam exercitationem! Architecto quia, dolor neque saepe vitae quisquam quo omnis repellendus totam, eos autem quos inventore quibusdam quis ex.
            Nobis sequi fugit reprehenderit necessitatibus fuga laborum dolor, ipsa incidunt eos voluptates dolorum amet facilis, nemo, at officia sapiente corrupti ex. Odio alias mollitia laborum minima reiciendis nesciunt enim consequatur?
            Repellat at adipisci voluptates quae eaque similique nam. Est laudantium, aut repudiandae amet non voluptatibus sit illum nam esse a magnam veniam, adipisci vero omnis repellendus ipsam. Officia, totam consequuntur?
            Ratione quae at expedita exercitationem voluptas, hic veritatis eius suscipit atque possimus, tenetur numquam et sapiente itaque placeat facilis quos ducimus quaerat beatae fugit quo impedit porro aliquam. Commodi, dolores?
            Sed architecto reprehenderit officiis id est deserunt blanditiis facere ea voluptatem sequi, veritatis facilis a. Repudiandae, mollitia maxime. Ullam magnam iusto dicta veniam voluptas. Dicta praesentium dolore consectetur cumque repellat!
            Atque, unde vel aspernatur illo libero similique mollitia architecto, sint blanditiis debitis, recusandae neque consectetur adipisci commodi accusantium possimus placeat iure. Sapiente nihil ex, dolores at debitis quibusdam sint doloribus.
            Quae obcaecati eius, adipisci nisi nesciunt blanditiis dolorum aliquam laborum tempore quaerat. Facere laudantium, deserunt commodi ab quo dignissimos, eligendi ut ipsum eius consectetur ad est voluptatem cumque cupiditate dolor!
            Voluptatem, odit deleniti ipsam veniam molestiae, reiciendis excepturi esse nemo repellat quis praesentium perferendis labore dicta, rerum quas ipsum sapiente! Maiores sed est, ad totam tempora corporis. Quia, voluptatum animi.
            Repellendus rerum aspernatur architecto nemo dolor officiis nihil recusandae autem magni et deserunt, perspiciatis quas quibusdam enim consectetur minima suscipit voluptatibus. Repellat, dicta error harum repudiandae illo iusto fuga nesciunt!
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
    // position: relative;

    .news-container {
        margin: 0;
        // position: absolute;
        left: 0;
        top: 0;

    }
}
</style>