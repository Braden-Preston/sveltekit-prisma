<script lang="ts">
  export let customer
</script>

<a href="/admin/customers">Back</a>
<a href={`/admin/customers/${customer.id}/edit`}>Edit</a>

<h1>Customer - #</h1>

<div class="root">
  <p>{customer.name}</p>
  <p>{customer.email}</p>
</div>
