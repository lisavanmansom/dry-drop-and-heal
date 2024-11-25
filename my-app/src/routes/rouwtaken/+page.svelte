<script>
    import BlurgradPink from '$lib/blurgrad-pink.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte'
</script>

<main class="intro-main">
    <article class="intro-article">
        <HeaderIntro headerText="Introductie algemeen" progressValue={20} />
        <section class="content">
            <h2>Rouwtaken</h2>
            <p>
                Onze methode is gebaseerd op de erkende rouwtaken van William Worden, Amerikaans rouwexpert, 
                zorgvuldig samengesteld om jou te ondersteunen tijdens je rouwreis. <br><br>
                Ontdek met ons de betekenis en steun die het jou kan bieden.
            </p>
        </section>
    </article>

    <BlurgradPink />

    <NavButtons leftLink="./tools" rightLink="./introduction-task-1" borderColor="#B264FF"/>

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

    header {
        text-align: left;
        align-self: flex-start;
        width: 100%;
        margin-top: 2rem;
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
    
</style>


