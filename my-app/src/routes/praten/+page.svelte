<script>
    import Nav from "../../lib/components/Nav.svelte";
    import BlurgradPink from "$lib/blurgrad-pink.svelte";
    import PeopleIcon from "$lib/atoms/people-icon.svelte";
    import ChatIcon from "$lib/atoms/chat-icon.svelte";
    import CallIcon from "$lib/atoms/call-icon.svelte";
    import ArrowR from "$lib/atoms/arrow-r-2.svelte"
</script>

<main class="praten-main-start">
    <section class="praten-heading-start">
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
    @import '/static/css/praten-pages.css'; 
</style>
