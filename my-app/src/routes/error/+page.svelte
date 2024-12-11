<script>
        import {ErrorImg} from '$lib'
</script>

<main>
    <h1 style="display: none;">error</h1>
    <section id="1">
        <h2><ErrorImg name="text" pageStyle="text"/></h2>
        <article>
            <h3>oops... you've reached the error page</h3>
            <p>to return to the site, <span>go through the forest and do no turn left</span></p>
            <a href="./multiple-task-1"><p>or click here</p></a>
            <a href="#2"><ErrorImg name="circle" pageStyle="circle"/></a>
            <ErrorImg name="scaryLady" pageStyle="scaryLady"/>
        </article>
        <ErrorImg name="treesBG" pageStyle="error-trees"/>
        <ErrorImg name="treesBG" pageStyle="error-trees-invert"/>
    </section>

    <section id="2">
        <h2>Error</h2>
        <h3>oops... you've reached the error page</h3>
        <a href="#3"><span>placeholder</span></a>
    </section>

    <section id="3">
        <h2>Error</h2>
        <h3>oops... you've reached the error page</h3>
        <a href="#1"><span>placeholder</span></a>
    </section>
</main>

<style>
    section {
        align-items: center;
        background-color: salmon;
        display: none;
        flex-direction: column;
        height: 100dvh;
        width: 100vw;
    }

    section:nth-of-type(1) {
        display: flex;
    }

    h2 {
        position: absolute;
        top: 0;
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

</style>