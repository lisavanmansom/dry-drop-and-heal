<script>
  import Header from "../../lib/components/Header.svelte";
  import Card from "../../lib/components/Card.svelte";
  import { MeshgradGreen } from "$lib";
  import Nav from "../../lib/components/Nav.svelte";
</script>

<html lang="nl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Drop & Heal</title>
  </head>

  <Header title="Het verlies aanvaarden" progressColor="#6e9158" />

  <main>
    <MeshgradGreen class="meshgrad" />
    <h2>Rouwstappen van de dag</h2>
    <h4>2 oefeningen open vandaag</h4>
  </main>

  <section class="exercises">
    <Card
      imageSrc="/icon/rouwtaak-3-foto.png"
      imageAlt="Rouwtaak Foto"
      actionText="Start oefening"
      description="Schrijven"
      title="Jouw plattengrond"
      buttonColor="#6e9158"
      communityDrops="47"
      communityImages={[
        "/icon/community1.png",
        "/icon/community2.png",
        "/icon/community3.png",
      ]}
    />
    <Card
      imageSrc="/icon/rouwtaak-3-foto.png"
      imageAlt="Rouwtaak Foto"
      actionText="Start oefening"
      description="Schrijven"
      title="Jouw plattengrond"
      buttonColor="#6e9158"
      communityDrops="47"
      communityImages={[
        "/icon/community1.png",
        "/icon/community2.png",
        "/icon/community3.png",
      ]}
    />
    <Card
      imageSrc="/icon/rouwtaak-3-foto.png"
      imageAlt="Rouwtaak Foto"
      actionText="Start oefening"
      description="Schrijven"
      title="Jouw plattengrond"
      buttonColor="#6e9158"
      communityDrops="47"
      communityImages={[
        "/icon/community1.png",
        "/icon/community2.png",
        "/icon/community3.png",
      ]}
    />
    <Card
      imageSrc="/icon/rouwtaak-3-foto.png"
      imageAlt="Rouwtaak Foto"
      actionText="Start oefening"
      description="Schrijven"
      title="Jouw plattengrond"
      buttonColor="#6e9158"
      communityDrops="47"
      communityImages={[
        "/icon/community1.png",
        "/icon/community2.png",
        "/icon/community3.png",
      ]}
    />
  </section>

  <Nav />
</html>

<style>
  :root {
    --w: #ffff;
    --b: #111;
    --g: #a6a6a6;
    --rt-1: #64aac7;
    --rt-2: #984a4a;
    --rt-3: #6e9158;
    --rt-4: #7c6097;

    --b-2: #b26161;
    --b-4: #9279a9;
    --progress-bg: #595959;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    background-color: var(--b);
    color: white;
    width: 100%;
  }

  @font-face {
    font-family: Calvino;
    src: url(../font/calvino-trial/Calvino-Grande-Regular-trial.ttf);
    font-weight: 500;
  }

  @font-face {
    font-family: Figtree;
    src: url(../font/figtree/Figtree-Regular.ttf);
    font-weight: 200;
  }

  @font-face {
    font-family: dm-serif;
    src: url(../font/dm-serif/DMSerifDisplay-Regular.ttf);
    font-weight: 100;
  }

  * {
    font-family: Figtree;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }

  *::-webkit-scrollbar {
    display: none;
  }

  h1,
  h2 {
    font-family: Calvino;
  }

  em {
    font-family: dm-serif;
  }

  main {
    position: relative;
    background-color: var(--b);
    background-image: url("/gradients/Gr-green.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    justify-content: center;
    text-align: center;
    padding-top: 5em;
    padding-bottom: 2em;
    overflow: hidden;
  }

  main h2 {
    margin-top: 5em;
    margin-bottom: 0.3em;
  }

  main h4 {
    color: grey;
  }

  .exercises {
    display: grid;
    grid-template-columns: 1fr; /* Standaard één kolom */
    gap: 1.5em; /* Ruimte tussen de kaarten */
    padding: 1em;
    padding-bottom: 10em;
    max-width: 1200px; /* Zet een maximale breedte */
    margin: 0 auto; /* Centreert de grid */
  }

  .card {
    background-color: #252525;
    border-radius: 10px;
    padding: 1em;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  /* Media query voor desktop lay-out */
  @media (min-width: 1200px) {
    .exercises {
      grid-template-columns: repeat(2, 1fr); /* Twee kolommen op desktop */
    }
  }
</style>
