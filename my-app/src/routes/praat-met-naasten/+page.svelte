<script>
    import Nav from "../../lib/components/Nav.svelte";
    import BlurgradPink from "$lib/blurgrad-pink.svelte";
</script>

<main class="praten-main">
    <section class="praten-heading">
        <h2>Praat met naasten</h2>
        <h4>In je rouwproces kunnen vrienden en familie soms onzeker zijn over hoe te helpen. Een klein teken van jou kan hen aanmoedigen om steun te bieden. </h4>
    </section>
    
    <section class="praten-content">    
        <div class="contact-list">
            <div class="contact-item">
              <img src="path-to-image" alt="Papa">
              <p>Papa</p>
              <a href="tel:+1234567890">Bellen</a>
            </div>
            <div class="contact-item">
              <img src="path-to-image" alt="Oma">
              <p>Oma</p>
              <a href="tel:+1234567890">Bellen</a>
            </div>
            <div class="contact-item">
              <img src="path-to-image" alt="Lena">
              <p>Lena</p>
              <a href="tel:+1234567890">Bellen</a>
            </div>
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

    .contact-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .contact-item {
        padding: 1rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        text-decoration: none;
        color: var(--w);
        text-decoration: none;
        border-bottom: 1px solid var(--b-p);
        min-width: 20rem;
    }

    .contact img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }

    .contact p {
        font-size: 18px;
    }


</style>
