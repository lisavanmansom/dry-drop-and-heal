<script>
    import Nav from "../../lib/components/Nav.svelte";
    import BlurgradPink from "../../lib/atoms/blurgrad-pink.svelte";
    import CallIcon from "$lib/atoms/call-icon.svelte";
    import AppIcon from "$lib/atoms/chatapp-icon.svelte";
    import PlusIcon from "$lib/atoms/plus-icon.svelte";
    import ArrowBack from "$lib/atoms/arrow-back.svelte";

    let showForm = false; 
    let firstName = "";
    let phoneNumber = "";
    let image = null;
    let person = [

    ];

    const addContact = (event) => {
        event.preventDefault(); 
        if (firstName && phoneNumber) {
            person = [...person, { name: firstName, phone: phoneNumber, image: image }];
            firstName = "";
            phoneNumber = ""; 
            image = null;
            showForm = false;
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                image = reader.result; 
            };
            reader.readAsDataURL(file); 
        }
    };

</script>

<main class="praten-main">
    <section class="praten-heading">
        <a href="/praten" class="arrow-goback">
            <ArrowBack />
        </a>
        <section class="text-heading">
            <h2>Praat met naasten</h2>
            <h4>In je rouwproces kunnen vrienden en familie soms onzeker zijn over hoe te helpen. Een klein teken van jou kan hen aanmoedigen om steun te bieden. </h4>
        </section>
    </section>

    <section class="praten-content">    
        <section class="heading-contacts">
            <h3>Naasten</h3>
            <button class="button" on:click={() => showForm = !showForm}>
                <PlusIcon />
            </button>
        </section>

        {#if showForm}
            <section class="form-container">
                <div class="form form-person">
                    <form on:submit={addContact}>
                        <div class="buttons-anull-send">
                            <button class="button button-close" on:click={() => showForm = false} type="button">
                                <p>Annuleer</p>
                            </button>
                            <button class="button button-send" type="submit">
                                <p>Gereed</p>
                            </button>
                        </div>
                        <div class="image-input-box">
                            <div class="image-preview">
                                {#if image}
                                    <img src={image} alt="Profile" class="image-circle" />
                                {:else}
                                    <p>profielfoto</p>
                                {/if}
                            </div>
                            <label for="file-input" class="file-input-label">
                                Bewerk
                            <input type="file" id="file-input" on:change={handleImageUpload} />
                            </label>
                        </div>
                        <div class="input-box" style="border-top: 1px var(--b-p) solid; border-bottom: 1px var(--b-p) solid;">
                            <input type="text" id="fname" name="fname" placeholder="Voornaam" autocomplete="off" bind:value={firstName} required>
                        </div>
                        <div class="input-box" style="border-bottom: 1px var(--b-p) solid;">
                            <input type="tel" id="telnumber" name="telnumber" placeholder="Telefoonnummer" autocomplete="off" bind:value={phoneNumber} required>
                        </div>
                    </form>
                </div>
            </section>
        {/if}

        {#if person.length === 0}
            <p style="text-align: center; padding-top: 1rem">Jij hebt nog geen contacten toegevoegd.</p>
        {:else}
            <div class="contact-list">
                {#each person as contact}
                    <div class="contact-item">
                        <img src={contact.image} alt={contact.name} class="contact-image">
                        <p>{contact.name}</p>
                        <section class="icons">
                            <CallIcon strokeColor="#f8f3f3" />
                            <AppIcon />
                        </section>
                    </div>
                {/each}
            </div>
        {/if}
    
    </section>

    <Nav />
</main>

<style>

    .praten-main {
        gap: 2rem;
        align-items: left;
        justify-content: left;
        justify-items: left;
        color: white;
        background-color: black;
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
        position: relative;
        min-width: 20rem;
    }

    .praten-main h4{
        font-size: 16px;
        color: var(--g);
    }

    .praten-heading {
        display: flex;
        flex-direction: row;
        align-items: top;
        padding: 3rem 3rem 3rem 1rem;
        width: 100%;
        background-color: var(--b-5)
    }

    .praten-content {
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 100%;
        padding-top: 1rem;
    }

    .heading-contacts {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }

    .contact-list {
        display: flex;
        flex-direction: column;
    }

    .contact-item {
        padding: 1.5rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        color: var(--w);
        text-decoration: none;
        border-bottom: 1px solid var(--b-p);
        min-width: 20rem;
    }

    .contact-image{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
    }

    .icons {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .arrow-goback {
        padding-right: 2rem;
        width: 3rem;
        height: 2rem;
    }

    /* Buttons */

    .button {
        border: none;
        background: transparent;
        cursor: pointer;
    }

    .button:active {
        transform: scale(0.8);
    }

    .buttons-anull-send {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem 3rem;
    }

    /* Form */

    .form-container {
        position: absolute;
        width: 100%;
        height: 80%;
        top: 20%;
        left: 50%;
        transform: translate(-50%);
        background: var(--b);
        border-radius: 50px;
    }

    .input-box {
        position: relative;
        width: 100%;
    }

    .input-box input{
        width: 100%;
        background: transparent;
        border: none;
        padding: 1.5rem 2rem;
        font-size: 16px;
        color: var(--w);
        outline: none;
    }

    .input-box input:active{
        background: transparent;
    }

    .input-box ::placeholder{
        color: var(--w);
    }

    .image-input-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        cursor: pointer;
        padding: 2rem;
    }
    
    .image-preview {
        width: 7rem;
        height: 7rem;
        background-color: #ddd;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image-preview img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .image-preview p {
        color: #fff;
        font-weight: bold;
        font-size: 16px;
    }

    input[type="file"] {
        display: none;
    }

    .file-input-label {
        padding-top: 1rem;
        cursor: pointer;
    }
    
</style>
