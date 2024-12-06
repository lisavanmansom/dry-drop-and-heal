<script>
    import BlurgradRed from '$lib/blurgrad-red.svelte';
    import BlurgradGreen from '$lib/blurgrad-green.svelte';
    import BlurgradPink from '$lib/blurgrad-pink.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
</script>


<main class="intro-main">
    <!-- Privacy Section -->
    <section id="privacy" class="section">
        <HeaderIntro headerText_l1="Introductie" headerText_l2="algemeen" progressValue={10} />
        <article class="content">
            <section class="content-grid">
                <h2>Privacy</h2>
                <p>Jouw privacy en comfort zijn onze prioriteit. Alles wat je deelt blijft vertrouwelijk.</p>
            </section>
        </article>
        <BlurgradRed />
    </section>

    <!-- Tools Section -->
    <section id="tools" class="section">
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
        <BlurgradGreen />
    </section>

    <!-- Rouwtaken Section -->
    <section id="rouwtaken" class="section">
        <HeaderIntro headerText_l1="Introductie" headerText_l2="algemeen" progressValue={30} />
        <article class="content">
            <section class="content-grid">
                <h2>Rouwtaken</h2>
                <p>
                    Onze methode is gebaseerd op de erkende rouwtaken van William Worden, Amerikaans rouwexpert, 
                    zorgvuldig samengesteld om jou te ondersteunen tijdens je rouwreis. <br><br>
                    Ontdek met ons de betekenis en steun die het jou kan bieden.
                </p>
            </section>
        </article>
        <BlurgradPink />
    </section>

    <section class="buttons">
        <NavButtons leftLink="./uitleg-metafoor" rightLink="./privacy" borderColor="var(--rt-4)"/>
    </section>
</main>


<style>

    .intro-main {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        color: white;
        background-color: black;
        padding: 2rem;
        overflow: auto;
    }

    .section {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: left;
        padding: 2rem;
    }

</style>

