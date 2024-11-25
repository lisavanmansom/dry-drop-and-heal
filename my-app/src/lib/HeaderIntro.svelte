<script>
    export let headerText = "Introductie"; 
    export let progressValue = 0; 
    export let progressMax = 100; 
</script>

<header class="header">
    <h3>{headerText}</h3>
    <div class="progress-container" aria-busy="true" aria-describedby="progress-bar">
        <progress id="progress-bar" value={progressValue} max={progressMax}></progress>
    </div>
</header>

<style>
    .header {
        text-align: left;
        align-self: flex-start;
        width: 100%;
        margin-top: 2rem;
    }

    h3 {
        font-family: Calvino-Grande;
        font-size: 32px;
        font-weight: 100;
        margin-bottom: 1rem;
    }

    .progress-container {
        display: flex;
        align-items: center;
    }

    progress {
        appearance: none;
        border: none;
        height: 2px;
        width: 100%;
        background-color: transparent;
    }

    progress::-webkit-progress-bar {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }

    progress::-webkit-progress-value {
        background-color: white;
        border-radius: 10px;
    }

    progress::-moz-progress-bar {
        background-color: white;
        border-radius: 10px;
    }
</style>
