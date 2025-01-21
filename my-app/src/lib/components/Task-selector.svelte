<script>
  export let current = "Het verlies aanvaarden";
  export let currentImage = "icon/rouwtaak-1.png";
  export let progressColor = "#64aac7";

  const items = [
    {
      label: "Het verlies aanvaarden",
      href: "/multiple-task-1",
      src: "icon/rouwtaak-1.png",
    },
    {
      label: "De pijn doorvoelen",
      href: "/multiple-task-2",
      src: "icon/rouwtaak-2.png",
    },
    {
      label: "Verder in verandering",
      href: "/multiple-task-3",
      src: "icon/rouwtaak-3.png",
    },
    {
      label: "Emotioneel verder",
      href: "/multiple-task-4",
      src: "icon/rouwtaak-4.png",
    },
  ];

  function getProgress() {
    const index = items.findIndex((item) => item.label === current);
    return ((index + 1) / items.length) * 100;
  }
</script>

<section class="mobile-flex">
  <details class="task-selector">
    <summary class="dropdown-toggle">
      <img loading="lazy" class="task-image" src={currentImage} alt="" width="10px" />
      <h1>{current}</h1>
      <svg
        class="arrow"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        width="16"
        height="16"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </summary>

    <div class="progress-container">
      <div
        class="progress-bar"
        style="width: {getProgress()}%; background-color: {progressColor};"
      ></div>
    </div>

    <nav class="dropdown-menu">
      <ul>
        {#each items as item}
          <li class="dropdown-list">
            <a href={item.href} class="dropdown-item">
              <img loading="lazy" src={item.src} alt="" width="15px" />
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </details>
</section>

<style>
  .task-selector {
    position: relative;
    display: inline-block;
    margin-left: 3em;
    padding: 0 30px;
  }

  .dropdown-toggle {
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h1 {
    max-width: none;
  }

  .task-image {
    width: 60px;
    margin-right: 1em;
  }

  .progress-container {
    margin: 10px 0;
    height: 1px;
    background-color: var(--progress-bg);
    border-radius: 5px;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    transition:
      width 0.3s ease,
      background-color 0.3s ease;
  }

  .dropdown-menu {
    border-radius: 5px;
    margin-top: 10px;
    padding: 0;
  }

  .dropdown-list {
    list-style: none;
  }

  .dropdown-item {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 15px;
    text-decoration: none;
    color: var(--text-color);
    transition: background 0.3s;
    background: rgba(255, 255, 255, 0.01);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
  }

  .dropdown-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .arrow {
    transition: transform 0.3s ease;
    stroke: var(--text-color);
  }

  details[open] .arrow {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    .task-selector {
      margin-left: 0;
      margin-top: 1em;
    }

    h1 {
      font-size: 1em;
    }

    .task-image {
      width: 40px;
      margin-right: 1em;
    }

    .mobile-flex {
      display: flex;
      justify-content: center;
    }
  }
</style>
