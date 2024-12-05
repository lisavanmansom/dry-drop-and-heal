<script>
    import {ImagesHome, TextHome} from '../index.js';
    
    // filter needs to be changed
    let headings = [{ title: "drop and heal", filter: "drop-shadow(16px 16px 20px red) saturate(1000%) contrast(100%) blur(10px)" }, { title: "Het verlies aanvaarden", filter: "sepia(50%)" }, { title: "De pijn doorvoelen", filter: "sepia(50%)" }, { title: "Verder in verandering", filter: "sepia(50%)" }, { title: "emotioneel verder gaan", filter: "sepia(50%)" }]
</script>

<section>
    <div class="view">
        <ImagesHome pageStyle="glass-home-1" name="glass"/>
        <ImagesHome pageStyle="glass-home-2" name="glass"/>
    </div>

    <div class="block">
        <!-- {#each headings as item}
            <article>
                <h2>{item.title}</h2>
            </article>
        {/each}-->

        {#each headings as item}
            <div class="d-i">
                <ImagesHome pageStyle="gradient-home" name="gradient" style="filter: {item.filter};"/>
            </div>
        {/each}

        <div class="d-s">
            <ImagesHome pageStyle="skeleton-home" name="skeleton"/>
            <ImagesHome pageStyle="skeleton-home" name="skeleton"/>
        </div>

        <div>
            <TextHome pageStyle="skeleton-home" name="drop"/>
            <TextHome pageStyle="skeleton-home" name="and"/>
            <TextHome pageStyle="skeleton-home" name="heal"/>
        </div>
    </div>
</section>

<style>
    /* h2 { font: italic 100 clamp(2.2rem, 10vw, 3.5rem) Poppins; } */

    section, 
    .d-s, .block {
        align-items: center;
        display: flex;
        height: 120vh;
        overflow: hidden;
        width: 100%;
    }

    .d-i, .d-s, .block, .view 
        { position: absolute; }


    section {
        position: relative;
    }

    section {
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }


    .d-i {
        display: none;
    }

    .d-i:nth-of-type(1) {
        display: block;
    }

    .d-s {
        align-items: end;
    }

    .view {
        z-index: 1;
    }
</style>