<script>
    import RisoGreen from './riso-green.svelte';
    import RisoPink from './riso-pink.svelte';
    import RisoRed from './riso-red.svelte';
</script>


<div class="rotating-container">
    <div class="meshgrad green">
        <RisoGreen />
    </div>
    <div class="meshgrad pink">
        <RisoPink />
    </div>
    <div class="meshgrad red">
        <RisoRed />
    </div>
</div>

<style>
    .rotating-container {
        position: sticky;
        top: 20em;
        width: 100%;
        height: 100vh;
        padding-left: 3rem;
        opacity: 0; 
        animation: fadeIn auto linear both; 
        animation-timeline: view(block);
        animation-range: entry 0% cover 90%; 
    }

    .meshgrad {
        position: absolute;
        width: 20em;
        height: 20em;
    }

    .meshgrad.red {
        animation: pulse 4s ease-in-out infinite, spinAround 8s linear infinite;
    }

    .meshgrad.green {
        animation: pulse 4s ease-in-out infinite, spinAround 8s linear infinite;
        animation-delay: -2s;
    }

    .meshgrad.pink {
        animation: pulse 4s ease-in-out infinite, spinAround 8s linear infinite;
        animation-delay: -4s;
    }


    @keyframes spinAround {
        0%{
            transform: rotate(0deg) translate(-50px) rotate(0deg);
        }
        100%{
            transform: rotate(360deg) translate(-50px) rotate(-360deg);
        }
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.1);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>