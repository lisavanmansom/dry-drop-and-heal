<script>
  import QuestionSet from '../molecules/question-set.svelte';

  // content form
  let questions = [{
    legend: "Hoe denk je over het verlies?",
    name: "question1",
    options: [
      {value: "f1-i-1", labelText: "Ik voel intens verdriet of pijn wanneer ik aan het verlies denk."},
      {value: "f1-i-2", labelText: "Het voelt nog steeds onwerkelijk, alsof het niet echt is gebeurd."},
      {value: "f1-i-3", labelText: "Ik probeer manieren te vinden om mijn dagelijkse leven aan te passen."},
      {value: "f1-i-4", labelText: "Ik begin de persoon een plek te geven in mijn herinneringen en probeer door te gaan."}
    ]
  },
  {
    legend: "Hoe vaak ervaar je emotionele pijn gerelateerd aan het verlies?",
    name: "question2",
    options: [
      { value: "f2-i-1", labelText: "Vrijwel constant voel ik verdriet en rouw."},
      { value: "f2-i-2", labelText: "Soms voel ik pijn, maar ik probeer verder te gaan."},
      { value: "f2-i-3", labelText: "Het wordt minder intens en ik vind troost in herinneringen."},
      { value: "f2-i-4", labelText: "Ik voel geen sterke emoties over het verlies, meer verwarring."}
    ]
  },
  {
    legend: "Hoe kijk je naar een toekomst zonder je dierbare?",
    name: "question3",
    options: [
      { value: "f3-i-1", labelText: "Ik kan me een toekomst zonder hen niet voorstellen."},
      { value: "f3-i-2", labelText: "Ik probeer nieuwe routines te ontwikkelen zonder hen."},
      { value: "f3-i-3", labelText: "Ik begin hoop te zien voor de toekomst en herinner me hen met liefde."},
      { value: "f3-i-4", labelText: "Ik voel me overweldigd door het verdriet en kan niet aan de toekomst denken."}
    ]
  }]
</script>

<!-- form component-->
<form method="POST" action="?/submit"> <!-- form submission / native-->
  {#each questions as question}
    <!-- QuestionSet / fieldsets-->
    <QuestionSet
      legend={question.legend}
      name={question.name}
      options={question.options}
    />
  {/each}
  <button type="submit">Ga verder</button>
</form>

<style>
  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 7.5em;
    text-align: center;
    z-index: 10;
  }

  button {
    background-color: transparent;
    border: .1em solid var(--b-z);
    border-radius: 1em;
    color: var(--w);
    cursor: pointer;
    font-size:clamp(1rem, 5vw, 1.2rem);
    padding: 1em 5em;
    transition: all 0.5s ease-in;
  }

  button:active {
    background-color: var(--w);
    border: .1em solid var(--w);
    color: var(--b);
  }

  button:hover {
    background-color: var(--b-h);
    border: .1em solid var(--w);
    color: var(--b);
  }

  button:focus-within {
    outline: 3px solid var(--b-f);
  }
</style>
