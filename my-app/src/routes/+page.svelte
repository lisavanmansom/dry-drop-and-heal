<script>
    import MeshBlue from '$lib/meshgrad-blue-static.svelte';
</script>


<main>
    <MeshBlue />
    <article class="content">
        <h1>Drop <br> & Heal</h1>
        <p>
            Welkom bij Drop & Heal. Een veilige plek voor jouw reis door rouwverwerking.<br><br>
            Er volgt eerst een introductie en kennismaking, hierna kan je op eigen tempo aan de slag in de omgeving.
        </p>
    </article>
    <a href="./uitleg-metafoor" class="start-button">Starten</a>

</main>

<style>

    main {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: black;
        width: 100%;
        height: 100vh;
    }

    main h1 {
        font-family: Calvino-Grande;
        font-size: 75px;
        line-height: 4.5rem;
        margin-bottom: 2rem;
    }

    .content {
        padding: 11rem 2rem 3rem 2rem;
        z-index: 100;
        justify-content: center;
    }
    
    .content p {
        padding-right: 3rem;
    }

    .start-button {
        position: absolute;
        bottom: 35px;
        z-index: 2000;
        display: inline-block; 
        background: none;
        border: 1px solid #F5F5F5;
        color: white;
        padding: 10px 20px;
        font-size: 1em;
        cursor: pointer;
        border-radius: 25px;
        margin-top: 1rem;
        text-align: center;
        text-decoration: none; 
        transition: background-color 0.3s;
    }

    .start-button:hover {
        background-color: rgba(245, 245, 245, 0.1);
    }

    .start-button:active {
        background-color: rgba(245, 245, 245, 0.2);
    }

</style>