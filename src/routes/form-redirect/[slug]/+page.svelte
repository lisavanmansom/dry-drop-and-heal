<script>  
  import { MeshGradient, NavIcons, BlurGradient } from '$lib';
  import { page } from '$app/stores';

  const content = {
    rouwtaak1: { title: "Het verlies aanvaarden", description: "Ontdek hoe je de realiteit van het verlies kunt omarmen", resultPage: "/form-redirect/rouwtaak1", taskPage: "/multiple-task-1", components: [ MeshGradient, BlurGradient ], className: "blue-theme result-page", pageStyles: BlurGradient.blueTheme },
    rouwtaak2: { title: "De pijn doorvoelen", description: "Sta jezelf toe om de pijn te voelen en leer om deze op jouw manier te verwerken", resultPage: "/form-redirect/rouwtaak2", taskPage: "/multiple-task-2", components: [ MeshGradient, BlurGradient ], className: "red-theme result-page", pageStyles: BlurGradient.redTheme },
    rouwtaak3: { title: "Verder in verandering", description: "Vind jouw weg in een wereld die nu anders is door het verlies van je dierbare", resultPage: "/form-redirect/rouwtaak3", taskPage: "/multiple-task-3", components: [ MeshGradient, BlurGradient ], className: "green-theme result-page", pageStyles: BlurGradient.greenTheme },
    rouwtaak4: { title: "Emotioneel verder gaan", description: "Ontdek hoe je een nieuw pad kunt inslaan terwijl je het verlies een betekenisvolle plek geeft in je leven.", resultPage: "/form-redirect/rouwtaak4", taskPage: "/multiple-task-4", components: [ MeshGradient, BlurGradient ], className: "pink-theme result-page", pageStyles: BlurGradient.pinkTheme }
  };

  let slug = '';
  let currentContent = content[slug] || { className: "default-theme"};

  $: {
    if ($page?.url?.pathname) {
      const pathParts = $page.url.pathname.split('/');
      slug = pathParts[pathParts.length - 1];
      currentContent = content[slug] || {
        title: "Geen inhoud gevonden",
        description: "Geen beschrijving beschikbaar voor deze pagina.",
        taskPage: "#",
        components: []
      };
    }
  }
</script>

<main class={currentContent.className}>
  <nav>
    <ul class="nav-ul">
      <li><a href={currentContent.taskPage}><span>Vandaag</span><NavIcons name="today" /></a></li>
      <li><a href="/chatbot"><span>Praten</span><NavIcons name="message" /></a></li>
      
      <!-- placeholder link rn, the supposed pages are not made yet-->
      <li><a href={currentContent.taskPage}><span>Drops</span><NavIcons name="drops" /></a></li>
      <li><a href={currentContent.taskPage}><span>Profiel</span><NavIcons name="profile" /></a></li>
    </ul>
  </nav>

  <section>
    <div class="heading-group">
      <h1>Uw resultaat</h1>
      <details>
        <summary>Verander van rouwtaak</summary>
        <ol>
          {#each Object.entries(content) as [key, notActiveContent]}
            <li>
              <a href={notActiveContent.resultPage}>{notActiveContent.title}</a>
            </li>
          {/each}
        </ol>
      </details>
      <label>
        <progress value="70" max="100">80 %</progress>
      </label>
    </div>

    <article>
      <h2>{currentContent.title}</h2>
      <p>{currentContent.description}</p>

      {#if currentContent.components[0] === MeshGradient}
        <MeshGradient imgSrc={`/assets/gradients/dynamic/Meshgrad-${slug}.png`} className={currentContent.currentContent} pageStyle= "ResultPage" />
      {/if}

      <a href={currentContent.taskPage}>Ga verder</a>
    </article>
  </section>

  <div class="background-gradient" aria-hidden="true">
    {#if currentContent.components[1]}
      <svelte:component this={currentContent.components[1]} pageStyle={currentContent.className} />
    {/if}
  </div>
</main>

<style>
  .blue-theme  { --rt: #64AAC7; }
  .red-theme   { --rt: #984A4A; }
  .green-theme { --rt: #6E9158; }
  .pink-theme  { --rt: #7C6097; }

  h1  { font-family: Calvino; z-index: 10; font-size: clamp(3rem, 15vw, 4rem); font-weight: 600; }
  h2  { font-family: Calvino; font-weight: 600; font-size:clamp(1.6rem, 5vw, 2rem);}
  p   { font-family: Figtree; color:var(--w); font-weight: 100; font-size:clamp(1rem, 5vw, 1.2rem);}
  ul  { list-style: none ;}
  a   { text-decoration: none; color: var(--w);}

  main {
    background-color: var(--b);
    color: var(--w);
    display: flex;
    flex-direction: column;
    gap: 2em;
    min-height: 100vh;
    overflow-x: hidden;
    padding: 1.5em 0;
    position: relative;
    width: 100%;

    .background-gradient {
      position: absolute;
      top: 15em;
      transform: matrix(0, 2, 2, 0, 0, 0);
    }
  }

  nav    { container: nav-banner / inline-size; z-index: 10;
    > ul {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 1em;
      justify-content: center;
      width: 100%;

    > li {
      align-items: center;
      display: flex;
      justify-content: center;
      width: 25%;

      > a {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        }
        @media (hover: hover) { 
          > a:hover {
              filter: brightness(75%);
          }
        }
      }
    }
    @container nav-banner (width > 425px) {
      ul {
        padding: 0 2em;
        gap: 5%;
        > li { width: unset;
          > a { flex-direction: row;
            > span { order: 1; }
          }
        }
      }
       li:nth-of-type(4) {
        flex-grow: 1;
        justify-content: end;
        > a { justify-content: end;}
      }
    }
    @container nav-banner (width > 900px) {
      ul {
        padding: 0 4.5em;
      }
    }
    @container nav-banner (width > 900px) {
      ul {
        padding: 0 8.5em;
      }
    }
  }

  section { container: main-container / inline-size; z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em 1em;
    text-align: left;
    > .heading-group {
      display: flex;
      flex-direction: column;
      gap: .25em;
      > h1 {
        letter-spacing: 0.02em;
      }
      > details {
        > ol { 
          column-gap: 3em;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          height: min-content;
          padding: 1em;
          row-gap: 1em;
          > li {
            flex-grow: 1;
            margin-left: .5em;
            padding-bottom: .2em;
            width: 10em;

            > a {
              color: var(--w);
              min-width: 40ch;

            }
            @media (hover: hover) { 
              > a:hover {
                filter: brightness(75%);
              }
            }
          }
        }
        > summary {
          color: var(--w);
        }
        @media (hover: hover) { 
          > summary:hover {
              filter: brightness(75%);
          }
        }
      }

      ::details-content {
        transition: height 0.5s ease, content-visibility 0.5s ease allow-discrete;
        height: 0;
      }
      [open]::details-content { height: 10em; }
    
    progress[value] {
      appearance: none;
      border: none;
      height: .25em;
      -moz-appearance: none;
      -webkit-appearance: none;
      min-width: 100%;
    }
    progress[value]::-webkit-progress-bar {
      background-color: var(--progress-bg);
      border-radius: 20px;
    }
    progress[value]::-webkit-progress-value { background-color: var(--w);}
  }

  > article {
    display: flex;
    flex-direction: column;
    > h2 {
      order: -3;
    }
    > p {
      order: -2;
      max-width: 45ch;
      padding-bottom: 2em;
    }
    > a { 
      border: 1px solid var(--w);
      border-radius: 18px;
      margin-top: 3em;
      padding: .5em 2em;
      transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      width: max-content;
    }
    @media (hover: hover) { 
      > a:hover {
        background-color: var(--b-h);
        border: 1px solid var(--w);
        color: var(--b);
        }
      }
  }

  @container main-container (width > 425px) {
      .heading-group { padding: 2em 2em 0; }
      article { padding: 1em 2em 0;}
  }

  @container main-container (width > 900px) {
      .heading-group { padding: 2em 4em 0;
        [open]::details-content { height: 4em; } }
      article { padding: 1em 4em 0;}
  }

  @container main-container (width > 1200px) {
      .heading-group { padding: 2em 8em 0; }
      article { padding: 1em 8em 0;}
  }
}
</style>