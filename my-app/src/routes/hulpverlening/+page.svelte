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

    .praten-heading h4{
        font-size: 16px;
        color: var(--g);
    }

    .praten-heading {
        display: flex;
        flex-direction: row;
        padding: 3rem 3rem 3rem 1rem;
        width: 100%;
        background-color: var(--b-5)
    }

    .praten-content {
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 100%;
    }

    .content-section {
        padding: 1.5rem 1rem 1rem 1.5rem;
    }

    .praten-content p {
        color: var(--g);
    }

    a {
        color: var(--w);
        text-decoration: underline;
    }

    .hulplijn-lijst {
        display: flex;
        flex-direction: column;
    }

    .hulplijn-lijst:first-child {
        border-bottom: none;
    }

    .hulplijn {
        padding: 1.5rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        text-decoration: none;
        border-bottom: 1px solid var(--b-p);
        border-top: 1px solid var(--b-p);
        min-width: 20rem;
    }

    .hulplijn p{
        color: var(--w);
    }

    .arrow-goback {
        padding-right: 2rem;
    }


</style>
