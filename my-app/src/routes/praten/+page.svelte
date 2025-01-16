<script>
    import Nav from "../../lib/components/Nav.svelte";
    import BlurgradPink from "$lib/blurgrad-pink.svelte";
</script>

<main class="praten-main">
    <h2>Praten</h2>

    <section class="praten-content">
        <a href="" class="section-item">
            <p>Praat met naasten</p>   
        </a>
        <a href="" class="section-item">
            <p>Chat met AI-Yana | 24-7 beschikbaar</p>
        </a>
        <a href="" class="section-item">
            <p>Hulpverlening</p>
        </a>
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

    .praten-content {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 1rem;
        width: 100%;
    }

    .section-item {
        padding: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-decoration: none;
        color: var(--w);
        text-decoration: none;
        border-bottom: 1px solid var(--b-p);
        min-width: 20rem;
    }


</style>
