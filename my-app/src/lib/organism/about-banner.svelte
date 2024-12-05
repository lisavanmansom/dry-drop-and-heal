<script>   
    let headings = [{ title: "Het verlies aanvaarden"}, { title: "De pijn doorvoelen"}, { title: "Verder in verandering"}, { title: "emotioneel verder gaan"}]
</script>

<section>
        <div class="pin-wrap-sticky">
            <div class="pin-wrap">
                {#each headings as item}
                <article class="a">
                    <h2>{item.title}</h2>
                </article>
            {/each}
            </div>
        </div>
</section>

<style>
    h2 { 
        font: italic 400 7em Poppins; 
        text-transform: uppercase;
        transform: scaleY(15);
    }

    article {
        width: 100%;
        text-wrap: nowrap;
    }

    @keyframes move {
	to {
		transform: translateX(calc(-100% + 100vw));
        /* moves horizontally, right edge is aligned against viewport */
	    }
    }

    section {
	    height: 100vh;
	    overflow: visible; /* for position sticky */
	    view-timeline-name: --section-pin-tl;
	    view-timeline-axis: block;
    }

    .pin-wrap-sticky {
	    height: 100vh;
        overflow-x: hidden;
        position: sticky;
	    top: 0;
	    width: 100vw;
    }

    .pin-wrap {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
	    height: 100vh;
	    width: 600vmax;

	    /* Hook animation */
	    will-change: transform;
	    animation: linear move forwards;

	    /* Link animation to view-timeline */
	    animation-timeline: --section-pin-tl;
	    animation-range: contain 10% contain 66.5%;
    }
</style>