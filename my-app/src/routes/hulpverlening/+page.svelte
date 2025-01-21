<script>
    import Nav from "../../lib/components/Nav.svelte";
    import BlurgradPink from "$lib/blurgrad-pink.svelte";
    import CallIcon from "$lib/atoms/call-icon.svelte";
    import ArrowBack from "$lib/atoms/arrow-back.svelte";
</script>

<main class="praten-main">
    <section class="praten-heading">
        <a href="/praten" class="arrow-goback">
            <ArrowBack />
        </a>
        <section class="text-heading">
            <h2>Hulpverlening</h2>
            <h4>Er zijn verschillende instanties bereikbaar voor hulpverlening. </h4>
        </section>
    </section>
    
    <article class="praten-content"> 
        <section class="content-section">
            <h3>Lotgenoten</h3>
            <p>Contact met lotgenoten, die begrijpen wat je doormaakt, kan troostend zijn en nieuwe perspectieven bieden in je rouwproces.</p>
        </section>
        <a class="hulplijn" href="https://www.evefoundation.nl">https://www.evefoundation.nl</a>
        <section class="content-section">
            <h3>Hulplijnen</h3>
            <p>Voor directe steun of een luisterend oor, overweeg een hulplijn te bellen waar je anoniem je verhaal kunt delen en advies kunt ontvangen.</p>
        </section>
        <ul class="hulplijn-lijst">
            <li class="hulplijn">
                <p>De Luisterlijn</p>
                <CallIcon strokeColor="#f8f3f3" />
            </li>
            <li class="hulplijn">
                <p>MIND Korrelatie</p>
                <CallIcon strokeColor="#f8f3f3" />
            </li>
        </ul>
    </article>

    <BlurgradPink pageStyle="praten-page"/>

    <Nav />

</main>


<style>
    @import '/static/css/praten-pages.css'; 
</style>
