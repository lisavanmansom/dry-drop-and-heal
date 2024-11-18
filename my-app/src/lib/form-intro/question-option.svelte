<script>
  let {name, value, labelText, bindGroup, ...others} = $props();
</script>

<!--in question-form staat de content van id / name / value / labeltext-->
<!-- input component-->
<div>
  <label>
    <input type="radio" name={name} value={value} bind:group={bindGroup} />
    {labelText}
  </label>
</div>