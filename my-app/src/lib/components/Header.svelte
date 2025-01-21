<script>
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header>
  <nav>
    <div class="hamburger-menu" on:click={toggleMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </div>
    <ul class="nav-links" class:active={menuOpen}>
      <li>
        <a href="#" class="active">
          <svg viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.689453 11.5345L1.37491 11.2907C7.18987 9.2232 13.5535 9.30967 19.3101 11.5345"
              stroke="currentColor"
              stroke-linecap="round"
            ></path>
            <path
              d="M0.5 6.5C0.5 3.46243 2.96243 1 6 1H14C17.0376 1 19.5 3.46243 19.5 6.5V14.5C19.5 17.5376 17.0376 20 14 20H6C2.96243 20 0.5 17.5376 0.5 14.5V6.5Z"
              fill="currentColor"
              stroke="currentColor"
            ></path>
          </svg>
          Vandaag
        </a>
      </li>
      <li>
        <a href="/chatbot">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.4137 14.1058C19.3656 13.9327 19.4714 13.6923 19.5723 13.5193C19.6032 13.4678 19.6369 13.418 19.6733 13.3702C20.5369 12.087 20.9988 10.5756 21.0002 9.02887C21.0147 4.59616 17.2743 1 12.6493 1C8.61559 1 5.25019 3.7452 4.46173 7.38944C4.34377 7.92957 4.28414 8.48081 4.28384 9.03368C4.28384 13.4712 7.88001 17.1635 12.505 17.1635C13.2406 17.1635 14.231 16.9423 14.7743 16.7933C15.3175 16.6443 15.856 16.4472 15.9954 16.3943C16.1383 16.3404 16.2898 16.3127 16.4425 16.3125C16.6092 16.3119 16.7743 16.3446 16.9281 16.4087L19.6541 17.375C19.7138 17.4003 19.777 17.4165 19.8416 17.4231C19.9436 17.4231 20.0414 17.3826 20.1135 17.3105C20.1857 17.2383 20.2262 17.1405 20.2262 17.0385C20.2228 16.9945 20.2148 16.951 20.2022 16.9087L19.4137 14.1058Z"
              stroke="white"
              stroke-width="1.2331"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M1.88753 9.84609C1.25697 10.9789 0.951934 12.264 1.00615 13.5594C1.06037 14.8547 1.47172 16.1099 2.19474 17.186C2.3058 17.3538 2.3683 17.4836 2.34907 17.5706C2.32984 17.6576 1.77551 20.5452 1.77551 20.5452C1.76218 20.6127 1.76724 20.6826 1.79016 20.7476C1.81307 20.8125 1.85301 20.8701 1.9058 20.9144C1.97624 20.9705 2.06382 21.0007 2.15388 21C2.202 21.0001 2.24964 20.9903 2.29378 20.9711L4.99619 19.9134C5.18219 19.8401 5.38967 19.8436 5.57312 19.923C6.4837 20.2778 7.49043 20.5 8.49765 20.5C9.84922 20.5014 11.1771 20.1449 12.3462 19.4668"
              stroke="white"
              stroke-width="1.2331"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
          Praten
        </a>
      </li>
      <li>
        <a href="#">
          <svg
            width="15"
            height="20"
            viewBox="0 0 15 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4869 12.9425C13.4869 14.9743 12.8501 16.5673 11.7664 17.651C10.6827 18.7346 9.08972 19.3715 7.05789 19.3715C5.02606 19.3715 3.43309 18.7346 2.34941 17.651C1.26573 16.5673 0.628888 14.9743 0.628888 12.9425C0.628888 10.8056 1.8088 8.20401 3.25965 5.84055C4.67506 3.53484 6.28016 1.56267 7.05813 0.650344C7.83593 1.56275 9.44087 3.53489 10.8562 5.84054C12.307 8.20401 13.4869 10.8056 13.4869 12.9425Z"
              stroke="white"
              stroke-width="1.25704"
              stroke-miterlimit="10"
            />
            <path
              d="M11.0068 13.5651C11.0068 14.5017 10.6348 15.3999 9.97251 16.0621C9.31025 16.7244 8.41204 17.0965 7.47546 17.0965"
              stroke="white"
              stroke-width="1.25704"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Drops
        </a>
      </li>
    </ul>
  </nav>
  <div class="profile">
    <a href="#">
      <svg
        width="21"
        height="22"
        viewBox="0 0 21 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.4628 5.61586C14.2743 8.15794 12.3472 10.2317 10.2316 10.2317C8.11598 10.2317 6.18549 8.15843 6.00038 5.61586C5.80805 2.97136 7.68324 1 10.2316 1C12.7799 1 14.6551 3.01944 14.4628 5.61586Z"
          stroke="white"
          stroke-width="1.23305"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.2305 13.308C6.04799 13.308 1.80297 15.6156 1.01742 19.9712C0.922716 20.4962 1.21982 21 1.76932 21H18.6917C19.2417 21 19.5388 20.4962 19.4441 19.9712C18.6581 15.6156 14.413 13.308 10.2305 13.308Z"
          stroke="white"
          stroke-width="1.23305"
          stroke-miterlimit="10"
        />
      </svg>
      Profiel
    </a>
  </div>
</header>

<style>
  header {
    top: 0;
    z-index: 1000;
    padding: 30px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3em;
  }

  .hamburger-menu {
    display: none;
    cursor: pointer;
  }

  .hamburger-menu svg {
    width: 30px;
    height: 30px;
    color: #fff;
  }

  nav ul {
    display: flex;
    gap: 120px;
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
    gap: 10px;
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
    gap: 10px;
    font-size: 1rem;
  }

  svg {
    width: 24px;
    height: 24px;
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
      padding: 20px;
    }

    nav a {
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding-bottom: 1em;
    }

    .nav-links.active {
      display: flex;
      position: absolute;
      top: 10%;
      z-index: 10;
      background: rgba(255, 255, 255, 0.01);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      gap: 3em;
      height: 100%;
    }

    nav ul {
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
