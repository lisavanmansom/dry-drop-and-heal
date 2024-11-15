<script>
  import QuestionOption from './question-option.svelte';

  export let legend;
  export let options;
  export let name;
</script>

<fieldset>
  <legend>{legend}</legend>
  {#each options as option}
    <QuestionOption
      id={option.id}
      name={name}
      value={option.value}
      labelText={option.labelText}
    />
  {/each}
</fieldset>
