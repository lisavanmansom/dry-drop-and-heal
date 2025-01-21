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
    @import '/static/css/praten-pages.css'; 
</style>
