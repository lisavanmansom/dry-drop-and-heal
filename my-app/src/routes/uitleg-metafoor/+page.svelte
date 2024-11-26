<script>
    import MeshBlue from '$lib/meshgrad-blue-static.svelte';
    import BlurgradBlue from '$lib/blurgrad-blue.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
</script>


<main class="intro-main">
    <div class="background-image">
        <MeshBlue />
    </div>
    <article class="content">
        <p>
            Drop & Heal is een metafoor voor het loslaten van de zware last van verdriet en het starten van een helend proces. 
            Als een druppel in het water valt, wordt het onderdeel van een groter, krachtiger geheel, dit gebeurt ook wanneer we ons verdriet delen.<br><br> 
            'Drop' verwijst naar het moment waarop je je verdriet of emoties deelt, laat vallen, of erkent.<br><br>
            'Heal' staat voor het genezingsproces dat volgt, waarbij je op je eigen tempo de stappen zet naar herstel en acceptatie. 
            Het is een uitnodiging om je verdriet te erkennen, het los te laten en jezelf toe te staan te helen, stap voor stap, druppel voor druppel.
        </p>
    </article>

    <BlurgradBlue customStyles="top: -120px; right: -100px;" />

    <section class="buttons">
        <NavButtons leftLink="./" rightLink="./privacy" borderColor="var(--rt-1)"/>
    </section>

</main>

<style>

    .intro-main {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-block-size: 100dvh;
        gap: 2rem; 
        align-items: center;
        color: white;
        background-color: black;
        width: 100%;
        height: 100vh;
        overflow-x: hidden;
        position: relative;
        padding: 2rem;
    }

    .content {
        padding: 0 2rem;
        z-index: 100;
        justify-content: center;
    }

    .background-image {
        opacity: 40%;
    }

    .buttons {
        justify-self: center; 
        z-index: 100;
    }
    
</style>



