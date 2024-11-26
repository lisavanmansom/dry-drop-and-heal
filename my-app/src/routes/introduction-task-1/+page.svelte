<script>
    import MeshgradBlue from '$lib/meshgrad-blue.svelte'
    import NavButtons from '$lib/NavButtons.svelte'
    import HeaderIntro from '$lib/HeaderIntro.svelte'
    import BlurgradBlue from '../../lib/blurgrad-blue.svelte';

    // export let task;
    // console.log('Task:', task);

    function stripHtml(html) {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
    // Verwijderd HTML tags die meegegeven zijn vanuit directus
    }
    let rt = "Rouwtaak"
    let sub1 = "Het verlies aanvaarden"
    let d1 = "Ontdek hoe je de realiteit van het verlies kunt omarmen."
</script>

<main class="intro-main">
    <a href="./introduction-h-1">skip</a>
    <HeaderIntro headerText_l1="Introductie" headerText_l2="rouwtaken" progressValue={40} />

    <article class="content">
        <section class="content-grid">
            <h2>{rt}<em>1</em></h2>
            <h4>{sub1}</h4>
            <p>{d1}</p> 
        </section>
        <MeshgradBlue />
    </article>

    <BlurgradBlue customStyles="bottom: -120px; right: -100px" />
    
    <section class="buttons">
        <NavButtons leftLink="./rouwtaken" rightLink="./introduction-task-2" borderColor="#4DB3FF"/>
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
        border: 1px solid var(--rt-1);
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
    

     @media (min-width:575px) {
        p       { max-width: 20em; }

       header { padding: 0 0 0 3em; justify-content: space-around;}

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

        p       { font-size: 1.4em; max-width: 22em; }

        header { padding: 0 0 0 3.7em;}

        #rt-1 { padding: 0em 2em 2em 1.8em; }

        progress { margin: 2em 2em; }
     }


@media (min-width:1175px) {
        #rt-1 { padding: 0em 4em 3em 3.5em; }

        progress { margin: 2em 0em; }
     }

     @media (min-width:1500px) {

        main { place-items: center; }

        header {padding: 0 25em 0 0em;}

        #rt-1 {
            align-items: stretch;
            justify-content: space-around;
            width: 56em;
        }
     }
</style>