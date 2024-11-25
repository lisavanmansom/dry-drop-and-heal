<script>
    import MeshBlue from '$lib/meshgrad-blue-static.svelte';
    import BlurgradBlue from '$lib/blurgrad-blue.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
</script>

<main class="intro-main">
    <div class="background-image">
        <MeshBlue />
    </div>
    <article class="intro-article">
        <p>
            Drop & Heal is een metafoor voor het loslaten van de zware last van verdriet en het starten van een helend proces. 
            Als een druppel in het water valt, wordt het onderdeel van een groter, krachtiger geheel, dit gebeurt ook wanneer we ons verdriet delen.<br><br> 
            'Drop' verwijst naar het moment waarop je je verdriet of emoties deelt, laat vallen, of erkent.<br><br>
            'Heal' staat voor het genezingsproces dat volgt, waarbij je op je eigen tempo de stappen zet naar herstel en acceptatie. 
            Het is een uitnodiging om je verdriet te erkennen, het los te laten en jezelf toe te staan te helen, stap voor stap, druppel voor druppel.
        </p>
    </article>

    <BlurgradBlue />

    <NavButtons leftLink="./" rightLink="./privacy" borderColor="#4DB3FF"/>

</main>

<style>

    h1, h2, h3  { font-family: Calvino-Grande;}
    h1      { font-size: 3em; font-weight: 600; z-index:2; max-width: 8em;}
    h2      { font-weight: 100; font-size: 48px;}
    h3      { font-weight: 100; text-wrap: nowrap; font-size: 32px;}
    em      { font-family: Figtree; font-weight: 100; font-size: 16px; font-style: normal; margin: 0 .25em;}
    p       { color: var(--w); font-weight: 100; font-size: 16px; line-height: 1.5rem;}


    .intro-main {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: black;
        padding: 2em 0;
        width: 100%;
        height: 100vh;
    }

    .intro-article {
        padding: 0 3rem;
        z-index: 100;
    }

    .background-image {
        opacity: 40%;
    }
    
</style>



