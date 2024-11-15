<script>
  export let id;
  export let name;
  export let value;
  export let labelText;
</script>

<!--vgm kan dit ook zonder div?, styling toevoegen zodat het overzichtelijk
kan worden neergezet. Nu als je div weggehaald staat alle inputs op 1 regel-->

<div>
  <input type="radio" id={id} name={name} value={value} />
  <label for={id}>{labelText}</label>
</div>
