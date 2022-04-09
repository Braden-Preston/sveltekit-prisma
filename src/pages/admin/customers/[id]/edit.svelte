<script lang="ts">
  import { page } from '$app/stores'
  import { object, string } from 'yup'
  import { createForm } from '../../../../functions/felte'
  import type { Customer } from '@prisma/client'

  export let customer: Customer

  let { form, data } = createForm({
    initialValues: customer,
    schema: object({
      name: string(),
      email: string().email().required()
    })
  })
</script>

<a href={`/admin/customers/${customer.id}`}>Back</a>

<h1>Edit - {$data.name}</h1>

<form
  use:form
  method="post"
  autocomplete="on"
  action={String($page.url) + '?_method=PATCH'}
>
  <div class="root">
    <label for="name">Name:</label>
    <input type="text" name="name" aria-describedby="name-validation" />
    <div
      id="name-validation"
      data-felte-reporter-dom-for="name"
      data-felte-reporter-dom-level="warning"
    />
    <label for="email">Email:</label>
    <input type="text" name="email" aria-describedby="email-validation" />
    <div
      id="email-validation"
      data-felte-reporter-dom-for="email"
      data-felte-reporter-dom-level="warning"
    />
    <button type="submit">Submit</button>
  </div>
</form>
