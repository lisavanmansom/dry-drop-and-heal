<script>
    import Nav from "../../lib/components/Nav.svelte";
    import BlurgradPink from "$lib/blurgrad-pink.svelte";
    import CallIcon from "$lib/atoms/call-icon.svelte";
    import AppIcon from "$lib/atoms/chatapp-icon.svelte";
    import PlusIcon from "$lib/atoms/plus-icon.svelte";
    import ArrowBack from "$lib/atoms/arrow-back.svelte";
</script>

<main class="praten-main">
    <section class="praten-heading">
        <a href="/praten" class="arrow-goback">
            <ArrowBack />
        </a>
        <section class="text-heading">
            <h2>Praat met naasten</h2>
            <h4>In je rouwproces kunnen vrienden en familie soms onzeker zijn over hoe te helpen. Een klein teken van jou kan hen aanmoedigen om steun te bieden. </h4>
        </section>
    </section>

    <section class="praten-content">    
        <section class="heading-contacts">
            <h3>Naasten</h3>
            <PlusIcon />
        </section>
        <div class="contact-list">
            <div class="contact-item">
              <img src="" alt="Papa">
              <p>Papa</p>
              <section class="icons">
                <CallIcon strokeColor="#f8f3f3" />
                <AppIcon />
              </section>
            </div>
            <div class="contact-item">
              <img src="" alt="Oma">
              <p>Oma</p>
              <section class="icons">
                <CallIcon strokeColor="#f8f3f3" />
                <AppIcon />
              </section>
            </div>
            <div class="contact-item">
              <img src="" alt="Lena">
              <p>Lena</p>
              <section class="icons">
                <CallIcon strokeColor="#f8f3f3" />
                <AppIcon />
              </section>
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
        min-width: 20rem;
    }

    .praten-main h4{
        font-size: 16px;
        color: var(--g);
    }

    .praten-heading {
        display: flex;
        flex-direction: row;
        align-items: top;
        padding: 3rem 3rem 3rem 1rem;
        width: 100%;
        background-color: var(--b-5)
    }

    .praten-content {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 1rem;
        width: 100%;
    }

    .heading-contacts {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }

    .contact-list {
        display: flex;
        flex-direction: column;
    }

    .contact-item {
        padding: 1.5rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        color: var(--w);
        text-decoration: none;
        border-bottom: 1px solid var(--b-p);
        min-width: 20rem;
    }

    .icons {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .arrow-goback {
        padding-right: 2rem;
        width: 3rem;
        height: 2rem;
    }


</style>
