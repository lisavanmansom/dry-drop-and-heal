<script>
  import Header from "../../lib/components/Header.svelte";
  import Card from "../../lib/components/Card.svelte";
  import TaskSelector from "../../lib/components/Task-selector.svelte";
</script>

<body>
  <main>
    <Header />
    <TaskSelector
      currentImage="/icon/rouwtaak-2.png"
      current="De pijn doorvoelen"
      progressColor="#984A4A"
    />

    <section class="rouwstappen">
      <h3>Rouwstappen van de dag</h3>
      <p>3 oefeningen open vandaag</p>
    </section>
    <Card
      communityDrops="47"
      communityImages={[
        "/icon/community1.png",
        "/icon/community2.png",
        "/icon/community3.png",
      ]}
      buttonBorderColor="#984A4A"
    />
  </main>
</body>

<style>
  body {
    background-color: #1e1e1e;
    background-image: url("/gradients/Gr-red.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-position: right 800px top 80%;
  }

  .rouwstappen {
    margin: 3em;
    padding: 30px 40px;
  }

  .rouwstappen h3 {
    color: white;
  }

  .rouwstappen p {
    color: grey;
  }

  @media (max-width: 768px) {
    body {
      background-image: url("/gradients/Gr-red.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-position: right 0px top -200px;
    }

    .rouwstappen {
      margin: 0em;
      padding: 0;
      text-align: center;
      margin-top: 4em;
    }

    .rouwstappen h3 {
      font-size: 1.5em;
    }
  }
</style>
