<script>
let {name, style = '', pageStyle = {}, ...others} = $props();
</script>

{#if name == 'skeleton'}
<img src="/images/IMG_skeleton.png" class={pageStyle} alt="two skeletons standing next to eachother" width="100" height="100" />

{:else if name == 'glass'}
<img src="/images/glass.png" class={pageStyle} alt="" width="100" height="100" /> <!--no alt text needed-->

{:else if name == 'gradient'}
<img src="/images/img-gradient.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->

{:else if name == 'vertebra'}
<img src="/images/IMG_3259.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->

{:else if name == 'skeleton-1'}
<img src="/images/IMG_3262.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
{/if}

<style>
    .skeleton-home {
        height: 100vh;
        object-fit: fill;
        width: 100vw;
    }

    .gradient-home {
        height: 180vh;
        object-fit: cover;
        width: 170vw;
    }

    .vertebra-home {
        top: 0; 
        height: 300vh;
        object-fit: fill;
        width: 20vw;
        position: absolute;
    }

    /* scroll driven animation glass images */
    @keyframes sticky-parallax-header-move-and-size {
	    from {
		    height: 50vh;
	    }
	    to {
		    background-position: 50% 100%;
		    height: 0vh;
            transform: translateY(-2000px);
	    }
    }

    @keyframes sticky-parallax-header-move-and {
	    from {
		    height: 50vh;
	    }
	    to {
		    background-position: 50% 100%;
		    height: 0vh;
            transform: translateY(2000px);
	    }
    }
    
    .glass-home-1, .glass-home-2 {
        backdrop-filter: blur(20px);
        object-fit: cover;
        width: 100%;
        position: fixed;
        left: 0;
    }

    .glass-home-1 {
        animation: sticky-parallax-header-move-and-size linear forwards;
	    animation-timeline: scroll();
	    animation-range: 0vh 100vh;
        top: 0;
    }

    .glass-home-2 {
        animation: sticky-parallax-header-move-and linear forwards;
	    animation-timeline: scroll();
	    animation-range: 0vh 100vh;
        bottom: 0;
    }

    @keyframes rotate-skeleton {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(360deg);
        }
    }

    .skeleton-rotate {
        height: 100vh;
        object-fit: fill;
        width: 40vw;
        animation: rotate-skeleton 5s infinite linear;
    }

    .grad-homepage {
        transform: scale(5);
        object-fit: cover;
        /* animation: bg-gradient 1s linear infinite; */
    }
    
    @keyframes bg-gradient {
        100% { filter: drop-shadow(16px 16px 20px red) invert(75%) hue-rotate(360deg);  }
    }
</style>
