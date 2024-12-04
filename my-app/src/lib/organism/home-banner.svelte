<script>
    import {ImagesHome} from '../index.js';
    
    // filter needs to be changed
    let headings = [{ title: "drop and heal", filter: "sepia(50%)" }, { title: "Het verlies aanvaarden", filter: "sepia(50%)" }, { title: "De pijn doorvoelen", filter: "sepia(50%)" }, { title: "Verder in verandering", filter: "sepia(50%)" }, { title: "emotioneel verder gaan", filter: "sepia(50%)" }]
</script>

<section>
    {#each headings as item}
        <article>
            <h2>{item.title}</h2>
            <ImagesHome name="gradient" style="filter: {item.filter};"/>
        </article>
    {/each}

    <ImagesHome name="skeleton"/>
    <div>
        <ImagesHome pageStyle="glass-home" name="glass"/>
        <ImagesHome pageStyle="glass-home" name="glass"/>
    </div>
</section>

<style>
    section {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100%;
      overflow-x: hidden;
      position: relative;
      text-align: center;
      width: 100%;
  }

  article {
    position: absolute;
  }


 
</style>