<script>
    import ViewTransition from '../navigation.svelte'
    import {ArrowR, ArrowL, QuestionForm} from '$lib'
   </script>

  <div class="app">
    <ViewTransition />
  </div>
  
  <main>

    <h1>Vragenlijst gepersonaliseerd programma</h1>

    <label>
      <progress value="70" max="100">70 %</progress>
    </label>

    <QuestionForm />
  </main>
  
  <style>
     
  </style>