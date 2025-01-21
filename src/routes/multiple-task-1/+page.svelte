<script>
  import { TaskSelector, Card, Header } from '$lib';
</script>

  <main>
    <Header />
    <TaskSelector />

    <section class="rouwstappen">
      <h3>Rouwstappen van de dag</h3>
      <p>3 oefeningen open vandaag</p>
    </section>
    <Card
      communityDrops="47"
    />
  </main>

<style>
  main {
    background-color: #1e1e1e;
    color: var(--w);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    width: 100%;
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