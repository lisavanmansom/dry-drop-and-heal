<script>
  import { goto } from '$app/navigation';

  let {title, text, ...others} = $props();

  function handleSelect(event) {
    const selectedSlug = event.target.value;
    goto(`/${selectedSlug}`);
  }
  export async function load({ params }) {
    const { slug } = params;

    const content = {
      "rouwtaak-1": { title: "Het verlies aanvaarden" },
      "rouwtaak-2": { title: "De pijn doorvoelen" },
      "rouwtaak-3": { title: "Verder in verandering" },
      "rouwtaak-4": { title: "Emotioneel verder gaan" },
    };

    return {
      props: content[slug] || { title: "Pagina niet gevonden", text: "Deze pagina bestaat niet." },
    };
  }
</script>

<main>
  <nav>
    <ul>
      <li>Vandaag</li>
      <li>Praten</li>
      <li>Drops</li>
    </ul>
  </nav>
  <h1>Uw resultaat</h1>

  <select on:change={handleSelect}>
    <option value="rouwtaak-1" selected={text === "Rouwtaak 1"}>{conten.title}</option>
    <option value="rouwtaak-2" selected={text === "Rouwtaak 2"}>{conten.title}</option>
    <option value="rouwtaak-3" selected={text === "Rouwtaak 3"}>{conten.title}</option>
    <option value="rouwtaak-4" selected={text === "Rouwtaak 4"}>{conten.title}</option>
  </select>

  <section>
    <h2>Rouwstappen van de dag</h2>
    <p>3 oefeningen open vandaag</p>

    <article>
      <h3>hiervan component maken</h3>
    </article>

    <Link href="./multiple-task-1" />
  </section>
</main>