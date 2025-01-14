<script>
  import { goto } from '$app/navigation'; 
  import { MeshgradBlue, MeshgradRed, MeshgradPink, MeshgradGreen } from '$lib'; 

  const content = {
    rouwtaak1: { title: "Het verlies aanvaarden", description: "Ontdek hoe je de realiteit van het verlies kunt omarmen", taskPage: "./multiple-task-1", component: MeshgradBlue },
    rouwtaak2: { title: "De pijn doorvoelen", description: "Sta jezelf toe om de pijn te voelen en leer om deze op jouw manier te verwerken", taskPage: "./multiple-task-2", component: MeshgradRed },
    rouwtaak3: { title: "Verder in verandering", description: "Vind jouw weg in een wereld die nu anders is door het verlies van je dierbare", taskPage: "./multiple-task-3", component: MeshgradGreen },
    rouwtaak4: { title: "Emotioneel verder gaan", description: "Ontdek hoe je een nieuw pad kunt inslaan terwijl je het verlies een betekenisvolle plek geeft in je leven.", taskPage: "./multiple-task-4", component: MeshgradPink },
  };

  let slug = ''; 
  let currentContent = null; 

  import { page } from '$app/stores';
  $: {
    if (page?.url?.pathname) {
      const pathParts = page.url.pathname.split('/');
      slug = pathParts[pathParts.length - 1]; 
      currentContent = content[slug] || null; 
    }
  }
  
  const handleSelect = (event) => {
    slug = event.target.value;
    currentContent = content[slug] || null; 
    
    goto(`/form-redirect/${slug}`, { replaceState: true });
  };
</script>

<main>
  <nav>
    <ul>
      <li>Vandaag</li>
      <li>Praten</li>
      <li>Drops</li>
      <li>Profiel</li>
    </ul>
  </nav>

  <div>
    <h1>Uw resultaat</h1>
    
    <select bind:value={slug} on:change={handleSelect}>
      <option value="" disabled selected hidden>Verander van rouwtaak</option>
      <option value="rouwtaak1">Het verlies aanvaarden</option>
      <option value="rouwtaak2">De pijn doorvoelen</option>
      <option value="rouwtaak3">Verder in verandering</option>
      <option value="rouwtaak4">Emotioneel verder gaan</option>
    </select>
  </div>

  <section>
      <h2>{currentContent.title}</h2>
      <p>{currentContent.description}</p>

      <svelte:component this={currentContent.component} />
      
      <a href={currentContent.taskPage}>Ga verder</a>
  </section>
</main>
