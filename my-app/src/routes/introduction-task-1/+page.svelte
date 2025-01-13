<script>
    import NavButtons from '$lib/NavButtons.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte';
    import BlurgradBlue from '$lib/blurgrad-blue.svelte';
    import MeshgradBlue from '$lib/meshgrad-blue.svelte';
    import MeshgradRed from '$lib/meshgrad-red.svelte';
    import MeshgradGreen from '$lib/meshgrad-green.svelte';
    import MeshgradPink from '$lib/meshgrad-pink.svelte';

    let rt = "Rouwtaak";
    let sub1 = "Het verlies aanvaarden";
    let d1 = "Ontdek hoe je de realiteit van het verlies kunt omarmen.";

    let columns = [true, false, false, false];

    function handleHover(index) {
        columns = columns.map((_, i) => i === index);
    }

    function handleMouseOut() {
        columns = [false, false, false, false];
    }
</script>

<main class="intro-main">
    <HeaderIntro headerText_l1="Introductie" headerText_l2="rouwtaken" progressValue={40} />
    <section class="intro-content">
        <article class="column {columns[0] ? 'active' : 'inactive'}" on:mouseenter={() => handleHover(0)} on:mouseleave={handleMouseOut}>
            <h2>{rt}<em>1</em></h2>
            <h4>{sub1}</h4>
            <p>{d1}</p>
            <MeshgradBlue />
        </article>

        <article class="column {columns[1] ? 'active' : 'inactive'}" on:mouseenter={() => handleHover(1)} on:mouseleave={handleMouseOut}>
            <h2>{rt}<em>2</em></h2>
            <h4>De pijn doorvoelen</h4>
            <p>Sta jezelf toe om de pijn te voelen en leer om deze op jouw manier te verwerken.</p>
            <MeshgradRed />
        </article>

        <article class="column {columns[2] ? 'active' : 'inactive'}" on:mouseenter={() => handleHover(2)} on:mouseleave={handleMouseOut}>
            <h2>{rt}<em>3</em></h2>
            <h4>Verder in verandering</h4>
            <p>Vind jouw weg in een wereld die nu anders is door het verlies van je dierbare.</p>
            <MeshgradGreen />
        </article>

        <article class="column {columns[3] ? 'active' : 'inactive'}" on:mouseenter={() => handleHover(3)} on:mouseleave={handleMouseOut}>
            <h2>{rt}<em>4</em></h2>
            <h4>Emotioneel verder gaan</h4>
            <p>Ontdek hoe je een nieuw pad kunt inslaan terwijl je het verlies een betekenisvolle plek geeft in je leven.</p>
            <MeshgradPink />
        </article>
    </section>

    <section class="intro-buttons">
        <NavButtons leftLink="./intro-algemeen" rightLink="./introduction-h-1" borderColor="var(--w)"/>
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
        overflow: hidden;
        padding: 2rem;
        position: relative;
    }

    .intro-content {
        display: grid;
        grid-template-columns: repeat(4, 1fr); 
        gap: 3rem;
        padding: 1rem 3rem 0 3rem;
        justify-items: center;
    }

    .column {
        max-width: 13rem;
        max-height: 30rem;
        transition: all 0.3s ease;
        opacity: 0.6;
        filter: brightness(0.7);
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all 0.6s ease;   
        display: flex;
        flex-direction: column;
    }

    .column h2 {
        font-size: 26px;
        margin-bottom: 0.2rem;
    }

    .column h4 {
        font-size: 13px;
        margin-bottom: 0.2rem;
    }

    .column p {
        color: var(--g);
        font-size: 10px;
        line-height: 1.2rem;
    }

    .column em {
        font-size: 20px;
    }

    .column.active {
        opacity: 1;
        filter: none; 
        transform: scale(1.6); 
    }

    .column h2, .column h4, .column p {
        display: none;
    }

    .column.active h2, .column.active h4, .column.active p {
        display: block;
    }

</style>
