<script>
  import 'tippy.js/dist/tippy.css'

  import Counter from '$components/counter.svelte'
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
