<script>  
   let {name, style = '', pageStyle = {}, ...others} = $props();
</script>

{#if name == 'skeleton'}
    <div>
        <img src="/hh-gs.png" alt="" width="100" height="100" class={pageStyle} />
    </div>
    {:else if name == 'heavenlyBG'}
    <img src="/background.jpg" alt="" width="100" height="100" class={pageStyle} />
    
    {:else if name == 'treesBG'}
    <img src="/green-trees.png" class={pageStyle} alt="" width="100" height="100" style={style} /> <!--no alt text needed-->
    
    {:else if name == 'treesBG-invert'}
    <img src="/green-trees.png" class={pageStyle} alt="" width="100" height="100" style={style} /> <!--no alt text needed-->
   {/if}


<style>
    div {
        clip-path: polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%);
        height: 50%;
        position: absolute;
        width: 40%;
        z-index: 1000;

    }

    .skeleton {
        background: rgb(252,70,70);
        background: radial-gradient(circle, rgba(252,70,70,0) 0%, rgb(0, 0, 0) 67%);
        height: 100%;
        object-fit: contain;
        width: 100%;

    }

    .heavenlyBG {
        height: 100vh;
        position: absolute;
        width: 100vw;
    }

    .error-trees, .error-trees-invert {
        bottom: 0;
        height: 100%;
        position: absolute;
        width: 50%;
    }

    .error-trees {
        left: 0;
    }
    .error-trees-invert {
        transform: scaleX(-1);
        right: 0;
    }

</style>