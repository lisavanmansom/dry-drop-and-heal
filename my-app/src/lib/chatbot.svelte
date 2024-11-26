<script>
  
import { messages } from '$lib/messagesStore.js';
   let inputMessage = '';

   // Handelt de submitactie af
   const handleSubmit = async (event) => {
       event.preventDefault(); // Voorkom dat het formulier de pagina opnieuw laadt

       // Voeg het nieuwe bericht toe aan de store
       messages.update(currentMessages => [...currentMessages, inputMessage]);

       // Verstuur het bericht naar de server
       await fetch('/api/messages', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({ message: inputMessage })
       });

       inputMessage = ''; // Reset het invoerveld na verzending
   };
  </script>

  <main>
<section class="drops">
  <h2>Community drops</h2>
  <p>Deel wat je van de oefening vond, lees ervaringen van anderen en steun elkaar in de reis door rouw. <strong>Je bent niet alleen.</strong> </p>


  
<footer>
  <form on:submit={handleSubmit} method="POST">
      <input type="text" placeholder="Type je bericht"/>
      <button type="submit">Verstuur</button>
  </form>

  <ul>
    {#each messages as message}
      <li>{message}</li>
    {/each}
  </ul>
</footer>


</section>
  
</main>
  
<style>
  @font-face {
    font-family: Calvino;
    src: url(../font/calvino-trial/Calvino-Grande-Regular-trial.ttf);
    font-weight: 500;
  }

  @font-face {
    font-family: Figtree;
    src: url(../font/figtree/Figtree-Regular.ttf);
    font-weight: 200;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

main {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: auto;
  letter-spacing: 0.5px;
    }

section {
  display: flex;
  flex-direction: column;
  background-color: #111111;
  width: 100%;
  height: 100vh;
  color: #A6A6A6;
}

h2 {
  color: #efefef;
  font-family: Calvino;
  font-weight: 800;
  font-size: 3.5em;
    }

ul li {
  list-style-type: none;
  position: relative;
  width: 200px;
  height: 100px;
  color: #f5f5f5;
  background-color: #1f1f1f;
  border: 2px solid #1f1f1f;
  border-radius: 50px;
  padding: 20px;
  margin: 2.5em;
  font-family: Figtree;
    }

  button {
  padding: .8em;
  border-radius: 50px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  width: 10%;
  font-family: Figtree;

}

input[type=text] {
  padding: .8em;
  border-radius: 50px;
  width: 80%;
  font-family: Figtree;
}

input[type=text]:focus-visible {
  outline: 2px solid teal;
  border-radius: 3px;
}

.drops footer {
  margin-top: auto;
  padding: 10px;
  border-top: 1px solid #ccc;
}

/* styles here will apply to extra small mobile devices */
@media only screen and (min-width: 450px) {

.drops {
width: 100%;
height: 100vh;
margin: 0;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
}

section {
  display: flex;
  flex-direction: column;
  background-color: #111111;
  width: 100%;
  height: 100vh;
  color: #A6A6A6;
}

input[type=text] {
  width: 100%;
  margin-bottom: .8em;
}

button {
  width: 100%;
}

button:focus-visible {
  outline: 2px solid red;
  border-radius: 3px;
}

}

@media only screen and (min-width: 768px) {
.drops {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 10px;
  }

  input[type=text] {
    width: 100%;
    margin-bottom: .8em;
  }

  button {
    width: 100%;
  }

  button:focus-visible {
    outline: 2px solid red;
    border-radius: 3px;
  }
}




    /* Desktop styles */
@media only screen and (min-width: 1025px) {
.drops {
  width: 100%;
  height: 100vh;
  margin: 40px auto;
  }

  main {
    display: flex;
    flex-flow: row;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }

  section {
  display: flex;
  flex-direction: column;
  background-color: #111111;
  width: 100%;
  height: 100vh;
  color: #A6A6A6;
}

}
  </style>