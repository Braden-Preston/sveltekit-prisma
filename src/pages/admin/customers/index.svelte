<script lang="ts">
  export let customers
</script>

<svelte:head>
  <title>Customers</title>
</svelte:head>

<a href="/admin">Back</a>

<h1>Customers</h1>

<table>
  <tr>
    <th>Name</th><th>Email</th><th># Projects</th>
  </tr>
  {#each customers as customer}
    <tr>
      <td><a href={`/admin/customers/${customer.id}`}>{customer.name}</a></td>
      <td>{customer.email}</td>
      <td>{customer.projects.length}</td>
    </tr>
  {/each}

  <a href="/admin/customers/new"><button>Add New</button></a>
</table>

<!-- <div>{JSON.stringify(customers, null, 2)}</div> -->
