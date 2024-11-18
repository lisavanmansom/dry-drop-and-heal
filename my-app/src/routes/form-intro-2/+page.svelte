<script>

    import {ArrowR, ArrowL, QuestionForm} from '$lib'
    export let data;
    console.log(data);
   </script>

  
  <main>

    <h1>Vragenlijst gepersonaliseerd programma</h1>
    <label>
      <progress value="70" max="100">70 %</progress>
    </label>

    <QuestionForm />
  </main>
  
  <style>
    main {
      color: black;
    }
     
  </style>