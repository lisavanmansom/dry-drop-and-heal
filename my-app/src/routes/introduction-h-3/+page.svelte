<script>
    import HeaderIntro from '$lib/HeaderIntro.svelte'
    import BlurgradGreen from '$lib/blurgrad-green.svelte';

    //export let task;
    //console.log('Task:', task);
  
    function stripHtml(html) {
      return html.replace(/<\/?[^>]+(>|$)/g, "");
      // Verwijderd HTML tags die meegegeven zijn vanuit directus
    }
  
    let sub = "Jouw keuze"
    
  </script>
  
  <main class="intro-main">
    <HeaderIntro headerText_l1="Hulp op maat, of" headerText_l2="liever zelf kiezen?" progressValue={100} />
    <article class="content">
      <section class="content-grid">
        <h2>{sub}</h2>
        <p>Als Yana iets vraagt wat je liever niet beantwoordt, is dat helemaal oké. Je kunt vragen overslaan wanneer jij dat wilt, je hoeft dit alleen maar aan te geven.<br><br>
          Liever zelf kiezen waar je start? Dat is ook mogelijk. Kies hieronder dan voor je eigen pad. Je kan op elk moment schakelen tussen de verschillende rouwtaken.<br><br>
          Jouw reis, jouw tempo.</p> 
      </section>
    </article>

    <BlurgradGreen customStyles="bottom: -120px; right: -100px" />

    <div class="d-a">
      <a href="./multiple-task-1">Eigen pad</a>
      <a href="./form-intro">Gepersonaliseerd</a>
    </div>
  </main>
  
<style>

  .content {
    padding-top: 3rem;
    justify-content: flex-start;
  }

  .content-grid {
      grid-template-rows: auto 15rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--w);
    border-radius: 2em;
    width: auto;
    text-align: center;
    font-size: 1em;
    text-decoration: none;
    padding: 1rem; 
    z-index: 5;
    background-color: transparent;
    color: white; 
}

.d-a {
    display: flex;
    flex-direction: row;
    gap: 1em; 
    justify-content: space-evenly; 
    margin-top: 2rem;
}

  @media (min-width:500px) {
  h1      { font-size: 2.5em; max-width: 10em;  }
  h2      { font-size: 2.2em; }
  p       { font-size: 1.4em; }
  main    { padding: 2em;}

  header a { font-size: 1.1em;}

  section { padding: 4em 4em 6em 2em; }

  article p { width: 80%;}
  .d-a { flex-direction: row; justify-content: start;}
  }

  @media (min-width:875px) {
    h1      { font-size: 2.7em; max-width: 10em;  }
    h2      { font-size: 2.4em; }
    p       { font-size: 1.6em; }

    header a { font-size: 1.2em;}

    progress[value] { min-width: 60%; }

    section { 
      align-items: end;
      padding: 7em 2em 0em 2em; 
  }

  article {  text-align: end; height: 28em;
          width: 25em; padding: 0 3.5em 0 0;}
  article p { width: 100%;}
  .d-a { justify-content: end; }
  }


</style>