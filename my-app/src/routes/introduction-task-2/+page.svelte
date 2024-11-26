<script>
    import MeshgradRed from '$lib/meshgrad-red.svelte'
    import NavButtons from '$lib/NavButtons.svelte'
    import HeaderIntro from '$lib/HeaderIntro.svelte'
    import BlurgradRed from '../../lib/blurgrad-red.svelte';

    // export let task;
    // console.log('Task:', task);

    function stripHtml(html) {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
    // Verwijderd HTML tags die meegegeven zijn vanuit directus
    }
    let rt = "Rouwtaak"
    let sub2 = "De pijn doorvoelen"
    let d2 = "Sta jezelf toe om de pijn te voelen en leer om deze op jouw manier te verwerken."
</script>

<main class="intro-main">
    <a href="./introduction-h-1">skip</a>
    <HeaderIntro headerText_l1="Introductie" headerText_l2="rouwtaken" progressValue={50} />

    <article class="content">
        <section class="content-grid">
            <h2>{rt}<em>2</em></h2>
            <h4>{sub2}</h4>
            <p>{d2}</p>
        </section>
        <MeshgradRed />
    </article>

    <BlurgradRed customStyles="bottom: -120px; right: -50px" />

    <section class="buttons">
        <NavButtons leftLink="./introduction-task-1" rightLink="./introduction-task-3" borderColor="#FF4D4D"/>
    </section>

</main>

<style>

    p {
        color: var(--g);
    }

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
        position: relative;
        padding: 2rem;
    }

    .intro-main a {
        position: absolute;
        top: 1rem;
        left: 1.4rem;
        border: 1px solid var(--rt-2);
        border-radius: .9em;
        color: var(--w);
        font-size: 1em;
        padding: .3em .8em;
        text-decoration: none;
        width: max-content;
    }

    .content {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0rem;
        z-index: 100;
        position: relative;
    }

    .content-grid {
        display: grid;
        grid-template-rows: auto auto 9rem;
        overflow: hidden;
        position: relative;
    }



    #rt-2 a { border: .2em solid var(--b-2); }

     @media (min-width:575px) {
        h1      { padding: .75em 0 0 1.5em; }
        p       { max-width: 20em; }

        #rt-2   { padding: 5.5em 4em 3em 3em; }

        article {
            align-items: end;
            gap: .75em;
            margin: 2em 0 0 0;
            text-align: end;
        }

        .d-a {
            gap: 2em;
            justify-content: end;
        }

        progress { margin: 2em 0em; }

        progress[value] {
            height: .25em;
            min-width: 25em;
        }
     }

     @media (min-width:875px) {
        h1      { font-size: 2.5em; max-width: 10em;  }
        h2      { font-size: 2.2em; }
        h3      { font-size: 1.7em; }

        em      { font-size: 1em; }
        p       { font-size: 1.4em; max-width: 22em; }

        #rt-2   { padding: 7em 2em 0em 2em; }

        progress { margin: 2em 2em; }
     }


@media (min-width:1175px) {
        #rt-2 { padding: 7.5em 4em 3em 4em; }

        progress { margin: 2em 0em; }
     }

     @media (min-width:1500px) {

        main { place-items: center; }

        #rt-2 {
            align-items: stretch;
            justify-content: space-around;
            width: 80em;
        }

        h1 { transform: translateX(-430px); }
     }
</style>