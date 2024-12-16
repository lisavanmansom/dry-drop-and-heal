<script>
    import ViewTransition from './navigation.svelte'
    import {ErrorImg} from '$lib'
</script>

<ViewTransition />

<div class="w-d-t">
    <div class="vt-t-n">
        <ErrorImg name="treesBG" pageStyle="error-trees"/>
    </div>
    
    <div class="vt-t-i">
        <ErrorImg name="treesBG-invert" pageStyle="error-trees-invert"/>
    </div>

    <ErrorImg name="treewomen" pageStyle="treewomen"/>
    <ErrorImg name="an1" pageStyle="an1"/>
    <ErrorImg name="an2" pageStyle="an2"/>
    <ErrorImg name="an3" pageStyle="an3"/>
    <ErrorImg name="an4" pageStyle="an4"/>
    <ErrorImg name="an5" pageStyle="an5"/>
    <ErrorImg name="an6" pageStyle="an6"/>
    <ErrorImg name="an8" pageStyle="an8"/>
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
        position: absolute;
        pointer-events: none;
        width: 100vw;

        visibility: hidden;
        view-transition-name: v-s;
    }

    .vt-t-n {
        left: 0;
        transform: translateX(100%);
        view-transition-name: slidein-middle-l;
    }

    .vt-t-i {
        right: 0;
        view-transition-name: slidein-middle-r;
        transform: translateX(-100%);
    }

    @media (prefers-reduced-motion: no-preference) {
        :root::view-transition-group(slidein-middle-l) {
            animation: fromLeft 10s ease-in-out;
        }

        :root::view-transition-group(slidein-middle-r) {
            animation: fromRight 10s ease-in-out;
        }

        :root::view-transition-group(v-s) {
            animation: Seen 10s ease-in-out;
        }
    }

    @keyframes fromLeft {
	    0% {
	        transform: translateX(-100%);
	    }
        50% {
	        transform: translateX(0);
	    }
	    100% {
		    transform: translateX(-100%); 
	    }
    }

    @keyframes fromRight {
	    0% {
	        transform: translateX(100%);
	    }
        50% {
	        transform: translateX(0);
	    }
	    100% {
		    transform: translateX(100%); 
	    }
    }

    @keyframes Seen {
	    0% {
	        opacity: 0;
	    }
        10% {
            opacity: 1;
	    }

        90% {
	        opacity: 1;
	    }
	    100% {
	        opacity: 0;
	    }
    }

</style>