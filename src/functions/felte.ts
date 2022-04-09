import { goto } from '$app/navigation'
import reporter from '@felte/reporter-dom'
import { validator } from '@felte/validator-yup'
import { createForm as _createForm } from 'felte'

export const createForm = (options: any) => {
  let { schema } = options
  return _createForm({
    extend: [reporter(), validator({ schema, level: 'warning' })],
    onSubmit: defaultSubmit,
    onError: defaultError,
    ...options
  })
}

export async function defaultSubmit(values, context) {
  console.log(values)

  let form = context.form
  let body: FormData | URLSearchParams = new FormData(form)
  const action = new URL(form.action)
  const method =
    form.method.toLowerCase() === 'get'
      ? 'get'
      : action.searchParams.get('_method') || form.method
  let enctype = form.enctype

  if (form.querySelector('input[type="file"]')) {
    enctype = 'multipart/form-data'
  }
  if (method === 'get' || enctype === 'application/x-www-form-urlencoded') {
    body = new URLSearchParams(body as any)
  }

  let fetchOptions: RequestInit

  if (method === 'get') {
    ;(body as URLSearchParams).forEach((value, key) => {
      action.searchParams.append(key, value)
    })
    fetchOptions = { method }
  } else {
    fetchOptions = {
      method: 'POST',
      body,
      headers: {
        'Content-Type': enctype,
        Accept: 'text/json'
      }
    }
  }

  const response = await window.fetch(action.toString(), fetchOptions)

  if (response.ok || response.redirected) {
    goto(response.url)
    return response
  }
  let { errors } = await response.json()
  throw errors
}

export const defaultError = async (errors: [], { setWarnings }) =>
  errors && errors.forEach(({ path, value }) => setWarnings(path, value))
