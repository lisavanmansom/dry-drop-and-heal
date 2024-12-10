<script>
    let {name, style = '', pageStyle = {}, ...others} = $props();
    </script>
    
    <!--animals with human head-->
    {#if name == 'an1'}
    <img src="/images/an-1.png" class={pageStyle} alt="" width="100" height="100" />
    
    {:else if name == 'an2'}
    <img src="/images/an-2.png" class={pageStyle} alt="" width="100" height="100" /> <!--no alt text needed-->
    
    {:else if name == 'an3'}
    <img src="/images/an-3.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'an4'}
    <img src="/images/an-4.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'an6'}
    <img src="/images/an-6.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
   
    {:else if name == 'an8'}
    <img src="/images/an-6.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    <!--background elements / trees etc-->
    {:else if name == 'hillBG'}
    <img src="/images/2-bg.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'forestBG'}
    <img src="/images/forest-trees.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'treesBG'}
    <img src="/images/green-trees.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
   
    <!--image elements-->
    {:else if name == 'cross'}
    <img src="/images/IMG-3272.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'heads'}
    <img src="/images/heads.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'scaryLady'}
    <img src="/images/IMG-3273.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'bird'}
    <img src="/images/IMG-3275.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'treewomen'}
    <img src="/images/IMG-3277.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'scareObject'}
    <img src="/images/IMG-3279.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {/if}
    
    <style>
        
    </style>
    