<script>
    import {ImagesHome} from '../index.js';
    
    // filter needs to be changed
    let headings = [{ title: "drop and heal", filter: "drop-shadow(16px 16px 20px red) saturate(1000%) contrast(100%) blur(10px)" }, { title: "Het verlies aanvaarden", filter: "sepia(50%)" }, { title: "De pijn doorvoelen", filter: "sepia(50%)" }, { title: "Verder in verandering", filter: "sepia(50%)" }, { title: "emotioneel verder gaan", filter: "sepia(50%)" }]
</script>

<section>
    <div class="view">
        <ImagesHome pageStyle="glass-home-1" name="glass"/>
        <ImagesHome pageStyle="glass-home-2" name="glass"/>
    </div>
</section>

<style>
    section {
        align-items: center;
        display: flex;
        height: 120vh;
        overflow: hidden;
        width: 100%;
    }

    .view 
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

    .view {
        z-index: 2;
    }
</style>