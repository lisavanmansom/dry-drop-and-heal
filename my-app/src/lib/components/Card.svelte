<script>
  export let communityDrops = "0";
  export let communityImages = [];
  export let buttonBorderColor = "#055b7f";

  let cards = [
    {
      title: "Schrijven",
      subtitle: "Ons leven samen",
      details: ["25 min", "3 tips"],
      expanded: true,
    },
    {
      title: "Lezen",
      subtitle: "Rouwen, hoe doe je dat?",
      details: ["15 min"],
      expanded: false,
    },
    {
      title: "Meditatie",
      subtitle: "Golven van ongeloof",
      details: ["3 min"],
      expanded: false,
    },
    {
      title: "Meditatie",
      subtitle: "Golven van ongeloof",
      details: ["3 min"],
      expanded: false,
    }
  ];

  function expandCard(index) {
    cards = cards.map((card, i) => ({ ...card, expanded: i === index }));
  }
</script>

<section class="all-cards">
  {#each cards as card, index}
    <article
      class="card {card.expanded ? 'expanded' : ''}"
      on:click={() => expandCard(index)}
    >
      <div>
        <p>{card.title}</p>
        <h2>{card.subtitle}</h2>
        {#if card.expanded}
          <div class="details">
            <a class="communitydrop" href="#">
              <div class="community-images">
                {#each communityImages as image}
                  <img
                    class="community-image"
                    loading="lazy"
                    src={image}
                    alt="Community Image"
                  />
                {/each}
              </div>
              <p>{communityDrops} community drops</p>
            </a>
            {#each card.details as detail}
              <div class="details-text">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 0.5C4.0111 0.5 3.0444 0.793245 2.22215 1.34265C1.3999 1.89206 0.759043 2.67295 0.380605 3.58658C0.00216642 4.50021 -0.0968502 5.50555 0.0960758 6.47545C0.289002 7.44535 0.765206 8.33627 1.46447 9.03553C2.16373 9.73479 3.05465 10.211 4.02455 10.4039C4.99445 10.5969 5.99979 10.4978 6.91342 10.1194C7.82705 9.74096 8.60794 9.10009 9.15735 8.27785C9.70675 7.4556 10 6.4889 10 5.5C10 4.84339 9.87067 4.19321 9.6194 3.58658C9.36812 2.97995 8.99983 2.42876 8.53553 1.96447C8.07124 1.50017 7.52005 1.13188 6.91342 0.880602C6.30679 0.629329 5.65661 0.5 5 0.5ZM5 9.5C4.20888 9.5 3.43552 9.2654 2.77772 8.82588C2.11992 8.38635 1.60723 7.76164 1.30448 7.03073C1.00173 6.29983 0.92252 5.49556 1.07686 4.71964C1.2312 3.94371 1.61216 3.23098 2.17157 2.67157C2.73098 2.11216 3.44372 1.7312 4.21964 1.57686C4.99556 1.42252 5.79983 1.50173 6.53074 1.80448C7.26164 2.10723 7.88635 2.61992 8.32588 3.27772C8.7654 3.93551 9 4.70887 9 5.5C9 6.56086 8.57857 7.57828 7.82843 8.32842C7.07828 9.07857 6.06087 9.5 5 9.5ZM5 2.5C4.86739 2.5 4.74022 2.55268 4.64645 2.64645C4.55268 2.74021 4.5 2.86739 4.5 3V5.21L3.45 5.815C3.35368 5.86958 3.2782 5.95459 3.23539 6.05669C3.19259 6.15879 3.18488 6.27221 3.21347 6.37916C3.24207 6.48612 3.30536 6.58056 3.39341 6.64767C3.48146 6.71478 3.58929 6.75077 3.7 6.75C3.78759 6.7506 3.8738 6.72819 3.95 6.685L5.25 5.935L5.295 5.89L5.375 5.825C5.39455 5.80025 5.41132 5.77342 5.425 5.745C5.4413 5.71816 5.4547 5.68966 5.465 5.66C5.4786 5.62821 5.48704 5.59445 5.49 5.56L5.5 5.5V3C5.5 2.86739 5.44732 2.74021 5.35355 2.64645C5.25979 2.55268 5.13261 2.5 5 2.5Z"
                    fill="#F5F5F5"
                  />
                </svg>

                <p>{detail}</p>
              </div>
            {/each}
          </div>
          <div class="middle">
            <button class="button" style="border-color: {buttonBorderColor}"
              >Start oefening</button
            >
          </div>
        {/if}
      </div>
    </article>
  {/each}
</section>

<style>
  .all-cards {
    display: flex;
    scroll-snap-type: x mandatory;
    gap: 4rem;
    padding: 1em 2em;
    overflow: auto;
    margin-top: 5em;
  }

  .card {
    background: var(--b);
    border-radius: 10%;
    padding: 1rem;
    padding-right: 5em;
    width: 50em;
    height: 12em;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card.expanded {
    height: 20em;
    position: relative;
  }

  .card h2 {
    margin: 0;
    color: white;
    max-width: none;
    font-size: 1.5rem;
  }

  .card .details {
    display: none;
    margin-top: 1rem;
    font-size: 0.9rem;
    margin: 5px;
  }

  .card.expanded .details {
    display: block;
  }

  .button {
    display: none;
    margin-top: 1rem;
    background-color: var(--b);
    padding: 0.5rem 1rem;
    border: solid 1px;
    color: white;
    border-radius: 1em;
    cursor: pointer;
    font-size: 1rem;
  }

  .middle {
    display: flex;
    justify-content: center;
    position: absolute;
    right: 29.2%;
    bottom: 10%;
    margin-top: 1em;
  }

  .details-text {
    border: solid rgb(245, 245, 245, 0.2) 1px;
    border-radius: 1em;
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
    align-items: center;
    gap: 0.5em;
    width: 100px;
    margin-top: 0.3em;
  }

  .card.expanded .button {
    display: inline-block;
  }

  .communitydrop {
    display: flex;
    text-decoration: none;
    border: solid rgb(245, 245, 245, 0.2) 1px;
    border-radius: 1em;
    padding-left: 1em;
    padding-right: 1em;
    width: 15.5em;
    margin-top: 1em;
  }

  .community-images {
    margin-right: 0.5em;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .community-image {
    margin-right: -0.2em;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    .all-cards {
      margin: 3em;
      margin-top: 1em;
    }
  }
</style>
