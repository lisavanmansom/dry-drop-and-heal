<script>
  import IconChat from "../IconChat.svelte";
  import IconDrop from "../IconDrop.svelte";
  import IconHamburger from "../IconHamburger.svelte";
  import IconProfile from "../IconProfile.svelte";
  import IconToday from "../IconToday.svelte";


  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header>
  <nav>
    <div class="hamburger-menu" on:click={toggleMenu}>
      <IconHamburger/>
    </div>
    <ul class="nav-links" class:active={menuOpen}>
      <li>
        <a href="#" class="active">
          <IconToday/>
          Vandaag
        </a>
      </li>
      <li>
        <a href="/chatbot">
          <IconChat/>
          Praten
        </a>
      </li>
      <li>
        <a href="#">
          <IconDrop/>
          Drops
        </a>
      </li>
    </ul>
  </nav>
  <div class="profile">
    <a href="#">
      <IconProfile/>
      Profiel
    </a>
  </div>
</header>

<style>
  header {
    top: 0;
    z-index: 1000;
    padding: 1.875em 2.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3em;
  }

  .hamburger-menu {
    display: none;
    cursor: pointer;
  }

  nav ul {
    display: flex;
    gap: 7.5em;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.625em;
    font-size: 1rem;
  }

  nav a.active {
    color: #fff;
  }

  .profile a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.625em;
    font-size: 1rem;
  }

  svg {
    width: 1.5em;
    height: 1.5em;
  }

  @media (max-width: 768px) {
    header {
      margin: 0em;
    }
    .hamburger-menu {
      display: block;
    }

    .nav-links {
      display: none;
      flex-direction: column;
      background: #333;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding: 1.25em;
    }

    nav a {
      border-bottom: 0.0625em solid rgba(255, 255, 255, 0.3);
      padding-bottom: 0.625em;
    }

    .nav-links.active {
      display: flex;
      position: absolute;
      top: 10%;
      z-index: 10;
      background: rgba(255, 255, 255, 0.01);
      box-shadow: 0 0.25em 1.875em rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(0.3125em);
      -webkit-backdrop-filter: blur(0.3125em);
      gap: 3em;
      height: 100%;
    }

    nav ul {
      flex-direction: column;
      gap: 1.25em;
    }
  }
</style>
