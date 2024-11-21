<script>
  import QuestionOption from '../atoms/question-option.svelte';
  let {name, value, labelText,selectedOption, options, legend, ...others} = $props();
</script>

<!-- fieldset component-->
<fieldset>
  <legend>{legend}</legend>
  {#each options as option}
  <!-- Question option / input component-->
    <QuestionOption
      name={name}
      value={option.value}
      labelText={option.labelText}
      bindGroup={selectedOption} 
    />
  {/each}
</fieldset>

<style>
  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 1.1em;
    width: 100%;
  }

  legend {
    font-size: 1.75em;
    margin: 0 0 1em 0;
  }
</style>
