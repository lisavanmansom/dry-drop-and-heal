<script>
    import BlurgradRed from '$lib/blurgrad-red.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte'
</script>

<main class="intro-main">
    <article class="intro-article">
        <HeaderIntro headerText="Introductie algemeen" progressValue={10} />
        <section class="content">
            <h2>Privacy</h2>
            <p>Jouw privacy en comfort zijn onze prioriteit. Alles wat je deelt blijft vertrouwelijk.</p>
        </section>   
    </article>

    <BlurgradRed />

    <NavButtons leftLink="./uitleg-metafoor" rightLink="./tools" borderColor="#FF4D4D"/>

</main>


<style>

    h1, h2, h3  { font-family: Calvino-Grande;}
    h1      { font-size: 3em; font-weight: 600; z-index:2; max-width: 8em;}
    h2      { font-weight: 100; font-size: 48px;}
    h3      { font-weight: 100; text-wrap: nowrap; font-size: 32px;}
    em      { font-family: Figtree; font-weight: 100; font-size: 16px; font-style: normal; margin: 0 .25em;}
    p       { color: var(--w); font-weight: 100; font-size: 16px; line-height: 1.5rem;}


    .intro-main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: white;
        background-color: black;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
        padding: 2rem 2rem;
    }

    .intro-article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 20rem;
    }

    .content h2 {
        margin-bottom: 1rem;
        font-size: 2.5em;
    }

    /* Container Queries */
    @container (min-width: 600px) {
        .content {
        padding-top: 5rem;
        }
        .content h2 {
        font-size: 3em;
        }
    }

</style>
