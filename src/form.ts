(document.querySelector('form') as HTMLElement).addEventListener('submit', (e) => {
  e.preventDefault()

  const form = e.currentTarget as HTMLFormElement;
  const formData = new FormData(form);

  const formValues = Object.fromEntries(Array.from(formData.entries()).map(([key, value]) => {
    return [key.replace(form.dataset.formPrefix as string, ''), value]
  }))

  console.log(formValues);

  // array_parameters_
})
