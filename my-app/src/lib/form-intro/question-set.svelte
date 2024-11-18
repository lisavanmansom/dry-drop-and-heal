<script>
  import QuestionOption from './question-option.svelte';
  export let legend;
  export let options;
  export let name;
  export let selectedOption;
</script>

<!--in question-form staat de content van id / name / value / labeltext-->
<!-- fieldset component-->

<fieldset>
  <legend>{legend}</legend>
  {#each options as option}
  <!-- Question option / input component-->
    <QuestionOption
      id={option.id}
      name={name}
      value={option.value}
      labelText={option.labelText}
      bindGroup={selectedOption} 
    />
  {/each}
</fieldset>
