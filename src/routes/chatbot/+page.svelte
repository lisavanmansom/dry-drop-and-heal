<script>
    let messages = [];
    let newMessage = '';
  
    function sendMessage() {
      messages = [...messages, { text: newMessage, timestamp: new Date().getTime() }];
      newMessage = '';
    }
  </script>

  <main>

  
  <section class="chatroom">
    <h1>Jouw reis, jouw tempo</h1>
    <ul>
      {#each messages as message}
        <li>{message.text} ({new Date(message.timestamp).toLocaleTimeString()})</li>
      {/each}
    </ul>
    
    <form method="POST">
        <input type="text" bind:value={newMessage} placeholder="Type je bericht"/>
        <button on:click={sendMessage}>Verstuur</button>
        <!-- dit is niet PE vgm-->
    </form>
  </section>
</main>
  
<style>
main {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  letter-spacing: 0.5px;
  height: 100%;
    }

.chatroom {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100vh;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #111111;
  color: #d9d9d9;
    }

h1 {
  color: #efefef;
  font-family: Calvino;
  font-weight: 800;
  font-size: 4.5em;
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

</style>