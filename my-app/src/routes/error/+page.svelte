<script>
        import {ErrorImg} from '$lib'

        let current = 1;
</script>

<main>
    <h1 style="display: none;">error</h1>
    <section id="s-1" class:show={current === 1} class:hide={current != 1}>
        <h2><ErrorImg name="text" pageStyle="text"/></h2>
        <article>
            <h3>oops... you've reached the error page</h3>
            <p>to return to the site, <span>go through the forest and do no turn left</span></p>
            <a href="./multiple-task-1"><p>or click here</p></a>
            <a href="#s-2" on:click={() => current = 2}><ErrorImg name="circle" pageStyle="circle"/></a>
            <ErrorImg name="scaryLady" pageStyle="scaryLady"/>
        </article>
        <ErrorImg name="treesBG" pageStyle="error-trees"/>
        <ErrorImg name="treesBG" pageStyle="error-trees-invert"/>
    </section>

    <section id="s-2" class:show={current === 1} class:hide={current != 2}>
        <h2>Error</h2>
        <h3>oops... you've reached the error page</h3>
        <a href="#s-3" on:click={() => current = 3}><ErrorImg name="circle" pageStyle="circle"/></a>
    </section>

    <section id="3" class:show={current === 1} class:hide={current != 3}>
        <h2>Error</h2>
        <h3>oops... you've reached the error page</h3>
        <a href="#s-1" on:click={() => current = 1}><ErrorImg name="circle" pageStyle="circle"/></a>
    </section>
</main>

<style>
    main {
        position: relative;
    }

    section {
        align-items: center;
        background-color: salmon;
        display: flex;
        flex-direction: column;
        height: 100dvh;
        position: absolute;
        width: 100vw;
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
        height: 100%;
        width: 100%;
    }

    article > h3, p, a {
        z-index: 2;
    }

    a {
        cursor: pointer;
    }

    article > a:nth-of-type(2) {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .show {
        opacity: 1;
        visibility: visible;
    }

    .hide {
        opacity: 0;
        visibility: hidden;
     }
</style>