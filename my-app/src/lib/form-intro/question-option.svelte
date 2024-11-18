<script>
  export let id;
  export let name;
  export let value;
  export let labelText;
  export let bindGroup;
</script>

<!--in question-form staat de content van id / name / value / labeltext-->
<!-- input component-->

<div>
  <input type="radio" id={id} name={name} value={value} bind:group={bindGroup} />
  <label for={id}>{labelText}</label>
</div>