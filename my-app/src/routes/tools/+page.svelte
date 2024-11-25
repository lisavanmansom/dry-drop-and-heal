<script>
    import BlurgradGreen from '$lib/blurgrad-green.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte'
</script>

<main class="intro-main">
    <article class="intro-article">
        <HeaderIntro headerText="Introductie algemeen" progressValue={15} />
        <section class="content">
            <h2>Tools</h2>
            <p>
                We hebben tools samengesteld om je te ondersteunen in je reis door rouw. 
                Straks geven we een rondleiding binnen de omgeving. 
                Laten we nu eerst samen het landschap van rouw verkennen.
            </p>
        </section>
    </article>

    <BlurgradGreen />

    <NavButtons leftLink="./privacy" rightLink="./rouwtaken" borderColor="#DDEC22"/>

</main>

<style>

    h1, h2, h3  { font-family: Calvino-Grande;}
    h1      { font-size: 3em; font-weight: 600; z-index:2; max-width: 8em;}
    h2      { font-weight: 100; font-size: 48px;}
    h3      { font-weight: 100; text-wrap: nowrap; font-size: 32px;}
    em      { font-family: Figtree; font-weight: 100; font-size: 16px; font-style: normal; margin: 0 .25em;}
    p       { color: var(--w); font-weight: 100; font-size: 16px; line-height: 1.5rem;}

    .show {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.5s ease-in-out;
    }

    .hide {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease-in-out;
    }

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