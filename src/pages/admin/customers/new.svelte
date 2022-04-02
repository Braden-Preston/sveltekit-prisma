<a href="/admin">Back</a>

<h1>New</h1>

<form action="/admin/customers" method="post" autocomplete="on">
  <div class="root">
    <input type="text" name="name" placeholder="First Name" />
    <input type="email" name="name" placeholder="Email (required)" />
    <button type="submit">Submit</button>
  </div>
</form>

<style>
  .root {
    gap: 8px;
    display: flex;
    flex-direction: column;
    max-width: 200px;
  }
  .root input,
  .root button {
    font-size: 18px;
    padding: 4px 10px;
  }
</style>
