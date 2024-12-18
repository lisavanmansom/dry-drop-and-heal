<script>
import { onNavigate } from '$app/navigation';

function delayNavigation() {
    return new Promise((resolve) => setTimeout(resolve, 100));
}

onNavigate(async (navigation) => {
    if (!document.startViewTransition) {
        await delayNavigation();
        return;
    }

    return new Promise((resolve) => {
        document.startViewTransition(async () => {
        await delayNavigation();
        resolve();
        await navigation.complete;
        });
    });
});
</script>



<div class="w-d-t">
    <h1>Dood gaan is niet glamourous</h1>
</div>

<slot />

<style>
    .w-d-t {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100dvh;
        justify-content: center;
        overflow: hidden;
        position: fixed;
        pointer-events: none;
        width: 100vw;
        background-color: red;
        z-index: 10000;

        transform: translateX(-101%);
        view-transition-name: v-s;
    }

    

    @media (prefers-reduced-motion: no-preference) {
        :root::view-transition-group(v-s) {
            animation: seen 1s ease-in-out;
        }
    }

   
    @keyframes seen {
	    0% {
	        /* scale: 0; */
            transform: none;
            opacity: 0;
	    }
        40%, 60% {
	        /* scale: 1; */
            opacity: 1;
	    }
	    99% {
	        /* scale: 0; */
            opacity: 0;  
            transform: none;
	    }
        100% {
            transform: translateX(-101%)
        }
    }

</style>