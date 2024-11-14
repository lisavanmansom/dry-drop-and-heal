<script>
    import ViewTransition from '../navigation.svelte'
    import {ArrowR, ArrowL} from '$lib'
   </script>

  <div class="app">
    <ViewTransition />
  </div>
  
  <main>

    <h1>Vragenlijst gepersonaliseerd programma</h1>

    <div aria-busy="true" aria-describedby="progress-bar"></div>
    <progress value="60" max="100"></progress>

    <h2>We stellen 12 vragen om een programma op maat voor je samen te stellen.</h2>

    <p>*Mocht je een vraag niet prettig vinden om te beantwoorden dan kan je deze altijd overslaan. </p>

    <a href="./introduction-h-2"><ArrowR /></a>
  </main>
  
  <style>
     
  </style>