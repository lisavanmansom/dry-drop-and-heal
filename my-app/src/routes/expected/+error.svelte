<script>
        import {ErrorImg} from '$lib'
        import { page } from '$app/stores';
</script>

<main>
    <h1>{$page.error.message}</h1>
    <section id="1">
        <h2>Error</h2>
        <article>
            <h3>oops... you've reached the error page</h3>
            <p>to return to the site, go through the forest and do no turn left</p>
            <a href="./multiple-task-1"><p>or click here</p></a>
            <a href="#2"><span>placeholder</span></a>
            <ErrorImg name="scaryLady"/>
        </article>
        <ErrorImg name="treesBG"/>
        <ErrorImg name="treesBG"/>
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
        display: none;
    }

    section:nth-of-type(1) {
        display: block;
    }
</style>