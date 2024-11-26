<script>
    import BlurgradGreen from '$lib/blurgrad-green.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte'
</script>

<main class="intro-main">
    
    <HeaderIntro headerText_l1="Introductie" headerText_l2="algemeen" progressValue={20} />
    <article class="content">
        <section class="content-grid">
            <h2>Tools</h2>
            <p>
                We hebben tools samengesteld om je te ondersteunen in je reis door rouw. 
                Straks geven we een rondleiding binnen de omgeving. <br>
                Laten we nu eerst samen het landschap van rouw verkennen.
            </p>
        </section>
    </article>
    
    <section class="buttons">
        <NavButtons leftLink="./privacy" rightLink="./rouwtaken" borderColor="var(--rt-3)"/>
    </section>
    <BlurgradGreen />

</main>

<style>

    @container (min-width: 600px) {
        .content {
            padding-top: 8rem; /* Nog meer ruimte bovenaan voor grotere schermen */
        }
        .content h2 {
            font-size: 3em;
        }
    }


</style>