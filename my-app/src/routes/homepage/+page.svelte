<script>
    import {ImagesHome, HomeBanner, AboutBanner} from '$lib'
</script>
 
<main>
  <HomeBanner />

  <div class="block">
    <ImagesHome pageStyle="skeleton-rotate" name="skeleton-1"/>
  </div>

  <AboutBanner />

  <ImagesHome pageStyle="vertebra-home" name="vertebra"/>

  <div class="s">
    <ImagesHome pageStyle="grad-homepage" name="gradient"/>
  </div>
</main>

<style>
  main {
    align-items: center;
    background-color: var(--b);
    color: var(--w);
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    width: 100%;
  }

  .s {
    position: absolute;
    top: 0;
    transform: scale(5);
  }

  .block {
    height: 100vh;
    position: fixed;
    animation: sticky-rotate-skeleton linear forwards;
    animation-timeline: scroll();
	  animation-range: 20vh 100vh;
    bottom: 0;
    z-index: 1;
  }

  @keyframes sticky-rotate-skeleton {
	    from {  transform: translateY(0vh);}
	    to { transform: translateY(100vh); }
    }

</style>