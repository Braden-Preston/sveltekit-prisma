<script lang="ts">
  // import 'tippy.js/dist/tippy.css'

  // import { createForm } from 'felte'
  // import { validator } from '@felte/validator-yup'
  // import reporter from '@felte/reporter-tippy'
  // import { object, string } from 'yup'

  // // export let errors

  // let schema = object({
  //   name: string().required(),
  //   email: string().email().required()
  // })

  // let { form } = createForm({
  //   initialValues: {
  //     // ...errors
  //   },
  //   extend: [reporter(), validator({ schema })],
  //   onSubmit(values, context) {
  //     // console.log('values', values)
  //     fetch('/admin/customers/new', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' }
  //     })
  //       .then(async (res) => {
  //         let data = await res.body
  //         console.log(data)
  //       })
  //       .catch(async (err) => {
  //         console.log(err)
  //       })
  //   },
  //   onError(err, context) {
  //     console.log(err, context)
  //   }
  // })
</script>

<a href="/admin/customers">Back</a>

<h1>New</h1>

<form action="/admin/customers/new" method="post" autocomplete="on">
  <div class="root">
    <input type="text" name="name" placeholder="First Name" />
    <input type="email" name="email" placeholder="Email (required)" />
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
