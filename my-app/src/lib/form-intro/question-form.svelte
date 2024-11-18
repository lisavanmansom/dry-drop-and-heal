<script>
  import QuestionSet from './question-set.svelte';

  // content form
  const questions = [
    {
      legend: "Hoe denk je over het verlies?",
      name: "question1",
      options: [
        { id: "f1-i-1", value: "f1-i-1", labelText: "Ik voel intens verdriet of pijn wanneer ik aan het verlies denk." },
        { id: "f1-i-2", value: "f1-i-2", labelText: "Het voelt nog steeds onwerkelijk, alsof het niet echt is gebeurd." },
        { id: "f1-i-3", value: "f1-i-3", labelText: "Ik probeer manieren te vinden om mijn dagelijkse leven aan te passen." },
        { id: "f1-i-4", value: "f1-i-4", labelText: "Ik begin de persoon een plek te geven in mijn herinneringen en probeer door te gaan." }
      ]
    },
    {
      legend: "Hoe vaak ervaar je emotionele pijn gerelateerd aan het verlies?",
      name: "question2",
      options: [
        { id: "f2-i-1", value: "f2-i-1", labelText: "Vrijwel constant voel ik verdriet en rouw." },
        { id: "f2-i-2", value: "f2-i-2", labelText: "Soms voel ik pijn, maar ik probeer verder te gaan." },
        { id: "f2-i-3", value: "f2-i-3", labelText: "Het wordt minder intens en ik vind troost in herinneringen." },
        { id: "f2-i-4", value: "f2-i-4", labelText: "Ik voel geen sterke emoties over het verlies, meer verwarring." }
      ]
    },
    {
      legend: "Hoe kijk je naar een toekomst zonder je dierbare?",
      name: "question3",
      options: [
        { id: "f3-i-1", value: "f3-i-1", labelText: "Ik kan me een toekomst zonder hen niet voorstellen." },
        { id: "f3-i-2", value: "f3-i-2", labelText: "Ik probeer nieuwe routines te ontwikkelen zonder hen." },
        { id: "f3-i-3", value: "f3-i-3", labelText: "Ik begin hoop te zien voor de toekomst en herinner me hen met liefde." },
        { id: "f3-i-4", value: "f3-i-4", labelText: "Ik voel me overweldigd door het verdriet en kan niet aan de toekomst denken." }
      ]
    }
  ];
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
  <button type="submit">Submit</button>
</form>
