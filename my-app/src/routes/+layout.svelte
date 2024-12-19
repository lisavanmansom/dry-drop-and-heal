<script>
import { SkeletonVT } from '$lib'
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
    <h1>Die young, be Glamourous</h1>
    <h2>share some holiday spirits with dying</h2>
    <SkeletonVT name="skeleton" pageStyle="skeleton"/>
    <SkeletonVT name="heavenlyBG" pageStyle="heavenlyBG"/>

    <SkeletonVT name="treesBG" pageStyle="error-trees"/>
    <SkeletonVT name="treesBG-invert" pageStyle="error-trees-invert"/>
</div>

<slot />

<style>
     .w-d-t {
        align-items: center;
        filter: hue-rotate(330deg) saturate(2);
        box-shadow: inset 0px 100px 300px rgb(248, 19, 19);
        color: var(--w);
        display: flex;
        flex-direction: column;
        height: 100dvh;
        justify-content: center;
        overflow: hidden;
        position: fixed;
        pointer-events: none;
        width: 100vw;

        transform: translateX(-101%);
        view-transition-name: v-s;
    }

    h1 { 
        color: #ec631b;
        font: 100 3.5em LastChristmas;
        filter: blur(1px);
        min-width: 100%;
   
        text-align: center;
        text-shadow: var(--b) 2px 2px;
        z-index: 1004;
    }

    h2 {
        color: #ec631b;
        font: 100 1.1em Apple Color Emoji;
        text-shadow: var(--b) 2px 2px;
        z-index: 1004;
    }

    

    @media (prefers-reduced-motion: no-preference) {
        :root::view-transition-group(v-s) {
            animation: seen 3s ease-in-out;
        }
    }

   
    @keyframes seen {
	    0% {
	        /* scale: 0; */
            transform: none;
            opacity: 0;
	    }
        20%, 90% {
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