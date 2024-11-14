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

    <form>
      <fieldset>
        <legend>Hoe denk je over het verlies?</legend>
        <input type="radio" id="f1-i-1" name="drone" value="f1-i-1" checked />
        <label for="f1-i-1">Ik voel intens verdriet of pijn wanneer ik aan het verlies denk.</label>
        
        <input type="radio" id="f1-i-2" name="drone" value="f1-i-2" checked />
        <label for="f1-i-2">Het voelt nog steeds onwerkelijk, alsof het niet echt is gebeurd.</label>

        <input type="radio" id="f1-i-3" name="drone" value="f1-i-3" checked />
        <label for="f1-i-3">Ik probeer manieren te vinden om mijn dagelijkse leven aan te passen.</label>

        <input type="radio" id="f1-i-4" name="drone" value="f1-i-4" checked />
        <label for="f1-i-4">Ik begin de persoon een plek te geven in mijn herinneringen en probeer door te gaan.</label>
      </fieldset>

      <fieldset>
        <legend>Hoe vaak ervaar je emotionele pijn gerelateerd aan het verlies?</legend>
        <input type="radio" id="f2-i-1" name="drone" value="f2-i-1" checked />
        <label for="f2-i-1">Vrijwel constant voel ik verdriet en rouw.</label>
        
        <input type="radio" id="f2-i-2" name="drone" value="f2-i-2" checked />
        <label for="f2-i-2">Soms voel ik pijn, maar ik probeer verder te gaan.</label>

        <input type="radio" id="f2-i-3" name="drone" value="f2-i-3" checked />
        <label for="f2-i-3">Het wordt minder intens en ik vind troost in herinneringen.</label>

        <input type="radio" id="f2-i-4" name="drone" value="f2-i-4" checked />
        <label for="f2-i-4">Ik voel geen sterke emoties over het verlies, meer verwarring.</label>
      </fieldset>

      <fieldset>
        <legend>Hoe kijk je naar een toekomst zonder je dierbare?</legend>
        <input type="radio" id="f3-i-1" name="drone" value="f3-i-1" checked />
        <label for="f3-i-1">Ik kan me een toekomst zonder hen niet voorstellen.</label>
        
        <input type="radio" id="f2-i-2" name="drone" value="f3-i-2" checked />
        <label for="f3-i-2">Ik probeer nieuwe routines te ontwikkelen zonder hen.</label>

        <input type="radio" id="f3-i-3" name="drone" value="f3-i-3" checked />
        <label for="f3-i-3">Ik begin hoop te zien voor de toekomst en herinner me hen met liefde.</label>

        <input type="radio" id="f3-i-4" name="drone" value="f3-i-4" checked />
        <label for="f3-i-4">Ik voel me overweldigd door het verdriet en kan niet aan de toekomst denken.</label>
      </fieldset>
    </form>
  </main>
  
  <style>
     
  </style>