<script lang="ts">
  export let customer
  export let errors
</script>

<a href={`/admin/customers/${customer.id}`}>Back</a>

<h1>Edit - {customer.name}</h1>

<form
  method="post"
  autocomplete="on"
  action={`/admin/customers/${customer.id}/edit?_method=PATCH`}
>
  <div class="root">
    <input type="text" name="name" value={customer.name} />
    <input type="email" name="email" value={customer.email} />
    <button type="submit">Submit</button>
  </div>
</form>

<div>{JSON.stringify(errors, null, 2)}</div>
