<script>
    import {ImagesHome} from '../index.js';
    
    // filter needs to be changed
    let headings = [{ title: "drop and heal", filter: "drop-shadow(16px 16px 20px red) saturate(1000%) contrast(100%) blur(10px)" }, { title: "Het verlies aanvaarden", filter: "sepia(50%)" }, { title: "De pijn doorvoelen", filter: "sepia(50%)" }, { title: "Verder in verandering", filter: "sepia(50%)" }, { title: "emotioneel verder gaan", filter: "sepia(50%)" }]
</script>

<section>
    {#each headings as item}
        <article>
            <h2>{item.title}</h2>
        </article>
    {/each}

    {#each headings as item}
    <div class="d-i">
        <ImagesHome pageStyle="gradient-home" name="gradient" style="filter: {item.filter};"/>
    </div>
    {/each}

    <div class="d-s">
        <ImagesHome pageStyle="skeleton-home" name="skeleton"/>
        <ImagesHome pageStyle="skeleton-home" name="skeleton"/>
    </div>

    <div class="d-g">
        <ImagesHome pageStyle="glass-home" name="glass"/>
        <ImagesHome pageStyle="glass-home" name="glass"/>
    </div>
</section>

<style>

    section, .d-s {
        align-items: center;
        display: flex;
        min-height: 100%;
        overflow: hidden;
        width: 100%;
    }

    /* w. position absolute */
    article, .d-i, .d-s{
        position: absolute;
    }

    section {
        flex-direction: column;
        justify-content: center;
        position: relative;
        text-align: center;
    }

    article {
        align-items: center;
        flex-direction: column;
        text-align: center;
        display: none;
        justify-content: center;
        z-index: 2;
    }

    article:nth-of-type(1) {
        display: flex;
    }

    .d-i {
        display: none;
    }

    .d-i:nth-of-type(1) {
        display: block;
    }

    .d-s {
        position: absolute;
    }

    .d-g {
        z-index: 1;
        background-color: rgb(0, 0, 0 , 0.15);
        filter: drop-shadow(5px 5px 5px black);
    }


 
</style>