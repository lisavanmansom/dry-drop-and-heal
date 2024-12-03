<script>
let {name, style = '',  ...others} = $props();
</script>

{#if name == 'skeleton'}
<img src="/images/IMG_skeleton.png" alt="two skeletons standing next to eachother" width="100" height="100" />

{:else if name == 'glass'}
<img src="/images/glass.png" alt="" width="100" height="100" /> <!--no alt text needed-->

{:else if name == 'gradient'}
<img src="/images/img-gradient.png" alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->

{/if}
