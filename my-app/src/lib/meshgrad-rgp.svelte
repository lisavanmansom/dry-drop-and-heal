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
        padding-left: 3rem;
        transform-origin: center;
    }

    .meshgrad {
        position: absolute;
        width: 15em;
        height: 15em;
    }

    .meshgrad.green {
        animation: pulse 4s ease-in-out infinite, spinAround 8s linear infinite;
    }

    .meshgrad.pink {
        animation: pulse 4s ease-in-out infinite, spinAround 8s linear infinite;
        animation-delay: -2s;
    }

    .meshgrad.red {
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
</style>