<script>
  let dropdownOpen = false;
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

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  function getProgress() {
    // Bepaal de voortgang op basis van de huidige taak
    const index = items.findIndex((item) => item.label === current);
    return ((index + 1) / items.length) * 100;
  }
</script>

<div class="mobile-flex">
  <div class="dropdown">
    <!-- Toggle button -->
    <button class="dropdown-toggle" on:click={toggleDropdown}>
      <img class="task-image" src={currentImage} alt="" width="60px" />
      <h1>{current}</h1>
      <svg
        class="arrow {dropdownOpen ? 'open' : ''}"
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
    </button>

    <!-- Progress bar -->
    <div class="progress-container">
      <div
        class="progress-bar"
        style="width: {getProgress()}%; background-color: {progressColor};"
      ></div>
    </div>

    <!-- Dropdown menu -->
    <div class="dropdown-menu {dropdownOpen ? 'open' : ''}">
      {#each items as item}
        <a href={item.href} class="dropdown-item">
          <img src={item.src} alt="" width="15px" />
          {item.label}</a
        >
      {/each}
    </div>
  </div>
</div>

<style>
  :root {
    --background-color: #111;
    --text-color: #fff;
    --hover-bg: #333;
    --border-color: #333;
    --shadow-color: rgba(0, 0, 0, 0.2);
    --progress-bg: #555;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    margin-left: 3em;
    padding: 0px 30px;
  }

  h1 {
    max-width: none;
  }

  .task-image {
    width: 60px;
    margin-right: 1em;
  }

  .dropdown-toggle {
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 1.2rem;
    cursor: pointer;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
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
    background: rgba(255, 255, 255, 0.01);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 5px;
    width: 200px;
    display: none;
    flex-direction: column;
  }

  .dropdown-menu.open {
    display: flex;
    width: 100%;
  }

  .dropdown-item {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 15px;
    padding: 1em;
    text-decoration: none;
    color: var(--text-color);
    transition: background 0.3s;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    font-size: 0.9rem;
  }

  .dropdown-item:hover {
    backdrop-filter: blur(50px);
    background: rgba(255, 255, 255, 0.1);
  }

  .arrow {
    transition: transform 0.3s ease;
    stroke: var(--text-color);
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    .dropdown {
      margin-left: 0em;
      margin-top: 1em;
    }

    h1 {
      font-size: 1em;
      max-width: none;
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
