<script>
    import Nav from "../../lib/components/Nav.svelte";
    import BlurgradPink from "$lib/blurgrad-pink.svelte";
</script>

<main class="praten-main">
    <section class="praten-heading">
        <h2>Hulpverlening</h2>
        <h4>Er zijn verschillende instanties bereikbaar voor hulpverlening. </h4>
    </section>
    
    <section class="praten-content"> 
        <h3>Lotgenoten</h3>
        <p>Contact met lotgenoten kan perspectieven bieden en troost geven.</p>
       
        <div class="links">
            <a href="https://www.evefoundation.nl" target="_blank">Eve Foundation</a>
        </div>
      
        <h3>Hulplijnen</h3>
        <p>Voor directe steun kun je een hulplijn bellen.</p>
      
        <div class="hotline-list">
        <div class="hotline">
            <p>De Luisterlijn</p>
            <a href="tel:+08001350">Bellen</a>
        </div>
        <div class="hotline">
            <p>MIND Korrelatie</p>
            <a href="tel:+09005050">Bellen</a>
        </div>
    </section>

    <BlurgradPink pageStyle="praten-page"/>

    <Nav />

</main>


<style>

    .praten-main {
        gap: 2rem;
        align-items: left;
        justify-content: left;
        justify-items: left;
        color: white;
        background-color: black;
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
        position: relative;
    }

    .praten-main h4{
        font-size: 16px;
        color: var(--g);
    }

    .praten-content {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 1rem;
        width: 100%;
    }

    .links a {
        color: var(--primary-color);
        text-decoration: underline;
    }

    .hotline-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .hotline a {
        color: var(--primary-color);
        font-size: 18px;
    }


</style>
