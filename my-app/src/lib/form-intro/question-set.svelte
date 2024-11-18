<script>
  import QuestionOption from './question-option.svelte';
  let {name, value, labelText,selectedOption, options, legend, ...others} = $props();
</script>

<!--in question-form staat de content van id / name / value / labeltext-->
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
