<script lang="ts">
        import {ErrorImg} from '$lib'

        let current = 1;

  const navigateTo = (hash: string, target: number) => {
      if (!document.startViewTransition) {
          current = target;
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
          return;
      }

      document.startViewTransition(() => {
            current = target;
            document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        
        });
  };
</script>

<main>
    <h1 style="display: none;">error</h1>
    <section id="s-1" data-view-transition="slide-in-bottom" class={current === 1 ? 'active slide-in' : 'slide-out'}>
        <h2><ErrorImg name="text" pageStyle="text"/></h2>
        <article>
            <h3>oops... you've reached the error page</h3>
            <p>to return to the site, <span>go through the forest and do no turn left</span></p>
            <a href="./multiple-task-1"><p>or click here</p></a>
            <a href="#s-2" on:click={() => navigateTo('#s-2', 2)}><ErrorImg name="circle" pageStyle="circle"/></a>
            <ErrorImg name="scaryLady" pageStyle="scaryLady"/>
        </article>
        <ErrorImg name="treesBG" pageStyle="error-trees"/>
        <ErrorImg name="treesBG" pageStyle="error-trees-invert"/>
    </section>

    <section id="s-2" data-view-transition="slide-in-bottom" class={current === 2 ? 'active slide-in' : 'slide-out'}>
        <h2><ErrorImg name="text" pageStyle="text text-2"/></h2>
        <article>
            <h3>oops... you've reached the error page</h3>
            <p>to return to the site, <span>go through the forest and do no turn left</span></p>
        </article>

        <a href="#s-3" on:click={() => navigateTo('#s-3', 3)}><ErrorImg name="circle" pageStyle="circle"/></a>

        <ErrorImg name="treesBG" pageStyle="error-trees z-dex"/>
        <ErrorImg name="treesBG" pageStyle="error-trees-invert z-dex"/>

        <ErrorImg name="treewomen" pageStyle="treewomen"/>
        <ErrorImg name="an1" pageStyle="an1"/>
        <ErrorImg name="an2" pageStyle="an2"/>
        <ErrorImg name="an3" pageStyle="an3"/>
        <ErrorImg name="an4" pageStyle="an4"/>
        <ErrorImg name="an5" pageStyle="an5"/>
        <ErrorImg name="an6" pageStyle="an6"/>
        <ErrorImg name="an8" pageStyle="an8"/>
    </section>

    <section id="s-3" data-view-transition="slide-in-bottom" class={current === 3 ? 'active slide-in' : 'slide-out'}>
        <h2><ErrorImg name="text" pageStyle="text"/></h2>

        <a href="#s-1" on:click={() => navigateTo('#s-1', 1)}><ErrorImg name="circle" pageStyle="circle"/></a>

        <ErrorImg name="treesBG" pageStyle="big-trees-invert z-dex"/>
        <ErrorImg name="hillBG" pageStyle="hillBG"/>

        <ErrorImg name="treewomen" pageStyle="treewomen3l"/>
        <ErrorImg name="treewomen" pageStyle="treewomen3r"/>

        <ErrorImg name="cross" pageStyle="cross"/>
        <ErrorImg name="heads" pageStyle="heads"/>
        <ErrorImg name="heads" pageStyle="heads-invert"/>
    </section>
</main>

<style>
    main {
        position: relative;
    }

    h3, p, a { font-family: Poppins; color: var(--w); text-align: center;}
    h3 { font-size: 1.3em; font-weight: 200; letter-spacing: 10%;}
    p  { font-size: .9em; letter-spacing: 20%; width: 88%;}
    a  { text-decoration: none; font-size: 1.1em; letter-spacing: 20%;}

    section {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100dvh;
        overflow: hidden;
        position: absolute;
        width: 100vw;

        visibility: hidden;
        transform: translateY(100%);
     

    }

    section:nth-of-type(2) {
        justify-content: center;
    }

    h2 {
        position: absolute;
        top: 6vh;
        z-index: 1;
    }

    article {
        align-items: center;
        justify-content: end;
        display: flex;
        flex-direction: column;
        gap: 1em;
        height: 100%;
        width: 100%;
    }

    article > h3, p, a {
        z-index: 2;
    }

    span {
        color: #F3DE8B;
    }

    article > a:nth-of-type(1) p {
        font-size: .7em; 
        letter-spacing: 20%;
        width: 100%;
        color: #F3DE8B;
    }

    a {
        cursor: pointer;
    }

    article > a:nth-of-type(2) {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    /* section 2 */
    section:nth-of-type(2) article {
        z-index: 4;
        opacity: .75;
        height: 60%;
    }

    section:nth-of-type(2) a {
        z-index: 5;
        position: absolute;
        bottom: 0vh;
    }

    section:nth-of-type(3) a {
        z-index: 5;
        position: absolute;
        bottom: 0vh;
    }

    section.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    section.slide-in {
        animation: slide-in 0.5s ease forwards;
    }

    section.slide-out {
        animation: slide-out 0.5s ease forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100%);
    }
}

</style>