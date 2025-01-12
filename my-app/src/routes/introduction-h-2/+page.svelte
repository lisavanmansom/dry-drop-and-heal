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
    <article class="intro-content">
      <section class="content-grid">
          <h2>{sub}</h2>
          <p>Maak kennis met Yana, jouw persoonlijke digitale hulp. Yana is getraind met informatie uit een breed scala literatuur over rouw.<br><br>
            Yana kan je voorzien van een programma dat bij jou aansluit.</p> 
      </section>
    </article>

    <BlurgradRed customStyles="bottom: -120px; right: -100px" />

    <section class="intro-buttons">
      <div class="nav-buttons">
        <button>
          <a href="./multiple-task-1" class="nav-link">Eigen pad</a>
        </button>
        <button>
          <a href="./form-intro" class="nav-link">Gepersonaliseerd</a>
        </button>
      </section>
      
  </main>
  
  <style>
    .nav-buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 1rem;
        margin-bottom: 0.5rem; 
    }

    .nav-buttons button {
        padding: 1rem;
        background: none;
        border-radius: 50px;
        border: 1px solid white;
        white-space: nowrap;
        width: min-content; 
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    }

    .nav-buttons button:hover {
        background-color: rgba(255, 255, 255, 0.1); 
        border-color: rgba(255, 255, 255, 1); 
        color: rgba(255, 255, 255, 1); 
    }

    .nav-buttons button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .nav-link {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: white;
    }
</style>