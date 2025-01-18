<script>
  import { onMount } from 'svelte';
  let {name, style = '', Visible = false , pageStyle = {}, ...others} = $props();

  onMount(() => {
    Visible = true;
  });
</script>

<div hidden={!Visible} class="gradient hidden {pageStyle}"  alt=""></div>

<style>
    .blue-theme  { --rt: #64AAC7; }
    .red-theme   { --rt: #984A4A; }
    .green-theme { --rt: #6E9158; }
    .pink-theme  { --rt: #7C6097; }

    .gradient {
        background-color: var(--rt);
        height: 20em;
        width: 20em;
        transform: scale(2);
        border-radius: 100%;
        filter: blur(100px) brightness(1.7);
        opacity: 0.8;

        /* removes brightness filter when viewed in firefox */
        @-moz-document url-prefix() {
            filter: blur(500px);
        }
    }

    .hidden {
        display: block;
    }
</style>