<script>
  let {name, value, labelText, bindGroup, ...others} = $props();
</script>

<label>
  <input type="radio" name={name} value={value} bind:group={bindGroup} />
  {labelText}
</label>

<style>
  input[type='radio'] {
    position: absolute;
    left: -10000px;
  }

  label {
    border: 1px solid var(--b-z);
    border-radius: 30px;
    cursor: pointer;
    font-size: 1.25em;
    overflow: hidden;
    padding: .6em 1.4em;
    position: relative;
  }

  label:has(input[type=radio]) {
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  label:has(input[type=radio]:hover) {
    background-color: var(--b-h);
    border: 1px solid var(--w);
    color: var(--b);
  }

  label:has(input[type=radio]:checked) {
    background-color: var(--w);
    border: .1em solid var(--w);
    color: var(--b);
  }

  label:focus-within {
    outline: 3px solid var(--b-f);
  }
</style>