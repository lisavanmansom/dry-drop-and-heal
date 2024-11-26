<script>
    import BlurgradRed from '$lib/blurgrad-red.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte'
    //export let task;
    //console.log('Task:', task);
  
    let sub = "Ontmoet Yana"
  
  </script>
  
  <main class="intro-main">
    <HeaderIntro headerText_l1="Hulp op maat, of" headerText_l2="liever zelf kiezen?" progressValue={90} />
    <article class="content">
      <section class="content-grid">
          <h2>{sub}</h2>
          <p>Maak kennis met Yana, jouw persoonlijke digitale hulp. Yana is getraind met informatie uit een breed scala literatuur over rouw.<br><br>
            Yana kan je voorzien van een programma dat bij jou aansluit.</p> 
      </section>
    </article>

    <BlurgradRed customStyles="bottom: -120px; right: -100px" />

    <section class="buttons">
      <NavButtons leftLink="./introduction-h-1" rightLink="./introduction-h-3" borderColor="var(--rt-2)"/>
    </section>
  </main>
  
  <style>


    .content {
      padding-top: 3rem;
      justify-content: flex-start;
    }
        
      @media (min-width:500px) {
        h1      { font-size: 2.5em; max-width: 10em;  }
        h2      { font-size: 2.2em; }
        p       { font-size: 1.4em; }
        main    { padding: 2em;}

        header a { font-size: 1.1em;}

        section { padding: 4em 4em 6em 2em; }

        article p { width: 80%;}
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