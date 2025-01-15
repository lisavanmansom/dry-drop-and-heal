<script>
  import { MeshgradBlue, MeshgradRed, MeshgradPink, MeshgradGreen, NavIcons } from '$lib';
  import { page } from '$app/stores';

  // Content definition
  const content = {
    rouwtaak1: { title: "Het verlies aanvaarden", description: "Ontdek hoe je de realiteit van het verlies kunt omarmen", resultPage: "/form-redirect/rouwtaak1", taskPage: "/multiple-task-1", component: MeshgradBlue },
    rouwtaak2: { title: "De pijn doorvoelen", description: "Sta jezelf toe om de pijn te voelen en leer om deze op jouw manier te verwerken", resultPage: "/form-redirect/rouwtaak2", taskPage: "/multiple-task-2", component: MeshgradRed },
    rouwtaak3: { title: "Verder in verandering", description: "Vind jouw weg in een wereld die nu anders is door het verlies van je dierbare", resultPage: "/form-redirect/rouwtaak3", taskPage: "/multiple-task-3", component: MeshgradGreen },
    rouwtaak4: { title: "Emotioneel verder gaan", description: "Ontdek hoe je een nieuw pad kunt inslaan terwijl je het verlies een betekenisvolle plek geeft in je leven.", resultPage: "/form-redirect/rouwtaak4", taskPage: "/multiple-task-4", component: MeshgradPink }
  };

  let slug = '';
  let currentContent = {};

  $: {
    if ($page?.url?.pathname) {
      const pathParts = $page.url.pathname.split('/');
      slug = pathParts[pathParts.length - 1];
      currentContent = content[slug] || {
        title: "Geen inhoud gevonden",
        description: "Geen beschrijving beschikbaar voor deze pagina.",
        taskPage: "#",
        component: null
      };
    }
  }
</script>

<main>
  <nav>
    <ul>
      <li><a href={currentContent.taskPage}>Vandaag</a><NavIcons name="today" /></li>
      <li><a href="/chatbot">Praten</a><NavIcons name="message" /></li>
      
      <!-- placeholder link rn, the supposed pages are not made yet-->
      <li><a href={currentContent.taskPage}>Drops</a><NavIcons name="drops" /></li>
      <li><a href={currentContent.taskPage}>Profiel</a><NavIcons name="profile" /></li>
    </ul>
  </nav>

  <div>
    <h1>Uw resultaat</h1>
    <details>
      <summary>Verander van rouwtaak</summary>
      <ul>
        {#each Object.entries(content) as [key, notActiveContent]}
          <li>
            <a href={notActiveContent.resultPage}>{notActiveContent.title}</a>
          </li>
        {/each}
      </ul>
    </details>
  </div>

  <section>
    <h2>{currentContent.title}</h2>
    <p>{currentContent.description}</p>

    {#if currentContent.component}
      <svelte:component this={currentContent.component} />
    {/if}

    <a href={currentContent.taskPage}>Ga verder</a>
  </section>
</main>

<style>

</style>