<script>

  import { QuestionOption } from '$lib'
  let {name, index, currentStep, value, labelText, selectedOption, options, legend, ...others} = $props();
</script>

<!-- fieldset component-->
<fieldset class={index === currentStep ? 'show' : 'hide'}>
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
    background: rgba(255, 0, 0, 0.14);
    backdrop-filter: blur(10.1px);
    border: 2px solid rgba(255, 0, 0, 1);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 1.1em;
    padding: .5em;
    -webkit-backdrop-filter: blur(4px);
  }

  legend {
    font-size: 1.75em;
    margin: 0 0 1em 0;
  }

  @media (scripting: enabled) {
    fieldset {
    position: absolute;
    transition: all 1s ease, visibility 0.5s ease;
  }

  .show {
    transform: translateY(0);
  }

  .hide {
    transform: translateY(300%);
    visibility: hidden;
  }
}
</style>
