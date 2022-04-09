<script lang="ts">
  import { page } from '$app/stores'

  export let customer
</script>

<a href="/admin/customers">Back</a>
<a href={`/admin/customers/${customer.id}/edit`}>Edit</a>

<h1>{customer.name}</h1>

<div class="root">
  <p>{customer.name}</p>
  <p>{customer.email}</p>
</div>

<form method="post" action={String($page.url) + '?_method=DELETE'}>
  <button type="submit">Delete</button>
</form>
