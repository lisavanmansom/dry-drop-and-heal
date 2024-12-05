<script>
    import {HomeBanner, GlassBanner} from '$lib'
</script>
  
  <main>
    <GlassBanner />
    <HomeBanner />
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
  </style>