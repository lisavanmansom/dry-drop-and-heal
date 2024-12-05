<script>
let {name, style = '', pageStyle = {}, ...others} = $props();
</script>

<img src="/gradients/Meshgrad-pink.png" class={pageStyle} alt="" width="100" height="100" />

<style>
    img {
        animation: aPink 35s linear infinite;
        height: 16em;
        order: -1;
        object-fit: contain;
        width: 100%;
        z-index: 5;
        padding-bottom: 3rem;
    }

    @keyframes aPink {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
    }

    @media (min-width:575px) {
        img { height: 17.5em; }
    }

    @media (min-width:875px) {
        img { height: 20em; }
    }

</style>