<script>
  import Header from "../../lib/components/Header.svelte";
  import Card from "../../lib/components/Card.svelte";
  import { MeshgradRed } from "$lib";
  import Nav from "../../lib/components/Nav.svelte";
</script>

  <Header title="Het verlies aanvaarden" progressColor="#984a4a" />

  <main>
    <MeshgradRed class="meshgrad" />
    <h2>Rouwstappen van de dag</h2>
    <h4>2 oefeningen open vandaag</h4>
  </main>

  <section class="exercises">
    <Card
      imageSrc="/icon/rouwtaak-2-foto.png"
      imageAlt="Rouwtaak Foto"
      actionText="Start oefening"
      description="Oefening"
      title="Emoties herkennen"
      buttonColor="#984a4a"
      communityDrops="47"
      communityImages={[
        "/icon/community1.png",
        "/icon/community2.png",
        "/icon/community3.png",
      ]}
    />
    <Card
      imageSrc="/icon/rouwtaak-2-foto.png"
      imageAlt="Rouwtaak Foto"
      actionText="Start oefening"
      description="Oefening"
      title="Emoties herkennen"
      buttonColor="#984a4a"
      communityDrops="47"
      communityImages={[
        "/icon/community1.png",
        "/icon/community2.png",
        "/icon/community3.png",
      ]}
    />
    <Card
      imageSrc="/icon/rouwtaak-2-foto.png"
      imageAlt="Rouwtaak Foto"
      actionText="Start oefening"
      description="Oefening"
      title="Emoties herkennen"
      buttonColor="#984a4a"
      communityDrops="47"
      communityImages={[
        "/icon/community1.png",
        "/icon/community2.png",
        "/icon/community3.png",
      ]}
    />
    <Card
      imageSrc="/icon/rouwtaak-2-foto.png"
      imageAlt="Rouwtaak Foto"
      actionText="Start oefening"
      description="Oefening"
      title="Emoties herkennen"
      buttonColor="#984a4a"
      communityDrops="47"
      communityImages={[
        "/icon/community1.png",
        "/icon/community2.png",
        "/icon/community3.png",
      ]}
    />
  </section>

  <Nav />

<style>
  *::-webkit-scrollbar {
    display: none;
  }

  h2 {
    font-family: Calvino;
  }


  main {
    position: relative;
    background-color: var(--b);
    background-image: url("/gradients/Gr-red.png");
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
    grid-template-columns: 1fr;
    gap: 1.5em;
    padding: 1em;
    padding-bottom: 10em;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* .card {
    background-color: #252525;
    border-radius: 10px;
    padding: 1em;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  } */

  @media (min-width: 1200px) {
    .exercises {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
