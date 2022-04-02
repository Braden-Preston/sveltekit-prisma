<script>
  import Counter from '$lib/counter.svelte'
</script>

<Counter />
<div class="root">
  <slot />
</div>

<style>
  .root {
    border: 1px solid blue;
  }
</style>
