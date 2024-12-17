<script>
    import MeshBlue from '$lib/meshgrad-blue-static.svelte';
    import BlurgradBlue from '$lib/blurgrad-blue.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
</script>


<main class="intro-main">
    <div class="background-image">
        <MeshBlue />
    </div>
    <article class="intro-content">
        <p>
            Drop & Heal is een metafoor voor het loslaten van de zware last van verdriet en het starten van een helend proces. 
            Als een druppel in het water valt, wordt het onderdeel van een groter, krachtiger geheel, dit gebeurt ook wanneer we ons verdriet delen.<br><br> 
            'Drop' verwijst naar het moment waarop je je verdriet of emoties deelt, laat vallen, of erkent.<br><br>
            'Heal' staat voor het genezingsproces dat volgt, waarbij je op je eigen tempo de stappen zet naar herstel en acceptatie. 
            Het is een uitnodiging om je verdriet te erkennen, het los te laten en jezelf toe te staan te helen, stap voor stap, druppel voor druppel.
        </p>
    </article>

    <BlurgradBlue customStyles="top: -120px; right: -100px;" />

    <section class="intro-buttons">
        <NavButtons leftLink="./" rightLink="./privacy" borderColor="var(--rt-1)"/>
    </section>

</main>

<style>

    .intro-content {
        padding: 0 2rem;
        z-index: 100;
        justify-content: center;
    }

    .background-image {
        opacity: 40%;
    }

    @media (min-width: 48rem){
        .intro-content {
            padding: 0 7rem;
            z-index: 100;
            justify-content: center;
        }
    }

    @media (min-width: 65rem){
        .intro-content {
            padding: 0 14rem;
            z-index: 100;
            justify-content: center;
        }
    }
    
</style>



