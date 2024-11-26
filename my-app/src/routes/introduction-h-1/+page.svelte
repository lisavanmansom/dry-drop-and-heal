<script>
    import BlurgradBlue from '$lib/blurgrad-blue.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte'
    //export let task;
    //console.log('Task:', task);
  
    let sub = "Persoonlijke reis"
  </script>
  
  <main class="intro-main">
    <HeaderIntro headerText_l1="Hulp op maat, of" headerText_l2="liever zelf kiezen?" progressValue={80} />
    <article class="content">
        <section class="content-grid">
            <h2>{sub}</h2>
            <p>Nu je meer weet over de rouwtaken zelf, is het tijd om jouw persoonlijke reis te samen te stellen.<br><br>
              Rouw is een uniek proces en niet lineair, daarom bieden we ondersteuning om je verder te helpen.</p> 
        </section>
      </article>

    <BlurgradBlue customStyles="bottom: -120px; right: -100px" />

    <section class="buttons">
      <NavButtons leftLink="./introduction-task-4" rightLink="./introduction-h-2" borderColor="var(--rt-1)"/>
    </section>
  </main>
  
  <style>

    .content {
      padding-top: 3rem;
      justify-content: flex-start;
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