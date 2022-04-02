<script>
  let count = 0

  function inc() {
    count++
  }

  function dec() {
    count--
  }
</script>

<div class="root">
  <button on:click={inc}>Inc</button>
  <p>Count: {count}</p>
  <button on:click={dec}>Dec</button>
</div>

<style>
  .root {
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
