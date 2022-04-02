<script lang="ts">
  export let customer
</script>

<a href={`/admin/customers/${customer.id}`}>Back</a>

<h1>Edit Customer - #</h1>

<form action="/admin/customers" method="post" autocomplete="on">
  <div class="root">
    <input type="text" name="name" value={customer.name} />
    <input type="email" name="name" value={customer.email} />
    <button type="submit">Submit</button>
  </div>
</form>