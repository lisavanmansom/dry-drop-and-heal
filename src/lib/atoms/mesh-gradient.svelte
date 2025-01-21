<script>
    let {imgSrc = '', className = '', style = '', pageStyle = {}, ...others} = $props();
</script>

<img class="MeshGrad {pageStyle}" alt="" src={imgSrc} width="100" height="100" />

<style>
    .MeshGrad {
        animation: Pulse 4s cubic-bezier(0.39, 0.58, 0.57, 1) infinite;
        height: 100%;
        object-fit: contain;
        width: 100%;
    }

    .ResultPage {
        height: 15em;
        margin: 2em 0;
    }

    @keyframes Pulse {
        0%, 100% {
            transform: scale(1); 
        }
        50% {
            transform: scale(1.1); 
        }
    }

    @media (min-width:575px) {
        .ResultPage { height: 17.5em; }
    }

    @media (min-width:875px) {
        .ResultPage { height: 20em; }
    }
</style>