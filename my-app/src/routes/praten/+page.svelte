<script>
    import Nav from "../../lib/components/Nav.svelte";
    import BlurgradPink from "$lib/blurgrad-pink.svelte";
    import PeopleIcon from "$lib/atoms/people-icon.svelte";
    import ChatIcon from "$lib/atoms/chat-icon.svelte";
    import CallIcon from "$lib/atoms/call-icon.svelte";
    import ArrowR from "$lib/atoms/arrow-r-2.svelte"
</script>

<main class="praten-main">
    <section class="praten-heading">
        <h2>Praten</h2>
        <h4>Steun van naasten, Yana of hulpverleners. </h4>
    </section>

    <section class="praten-content">
        <a href="/praat-met-naasten" class="section-item">
            <PeopleIcon />
            <p>Praat met naasten</p>   
            <ArrowR />
        </a>
        <a href="/chatbot" class="section-item">
            <ChatIcon />
            <p>Chat met AI-Yana | 24-7 beschikbaar</p>
            <ArrowR />
        </a>
        <a href="/hulpverlening" class="section-item">
            <CallIcon />
            <p>Hulpverlening</p>
            <ArrowR />
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

    .praten-main h4{
        font-size: 16px;
        color: var(--g);
    }

    .praten-heading {
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

    .section-item {
        padding: 1rem;
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


</style>
