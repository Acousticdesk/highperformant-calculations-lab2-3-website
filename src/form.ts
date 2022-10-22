import { createArray } from './array-server-interaction';
import { CreateFormDTO } from './array-server-interaction/interfaces';
import { createLoadingButton } from './loading-button';
import { snakeCaseToCamelCase } from './string';
import { delay } from './delay';
import { createLoader } from './loader';
import formPersistor from './form-persistor';

const FORM_PREFIX = 'array_parameters_';

// hydrate form values
document.addEventListener('DOMContentLoaded', () => {
  formPersistor.hydrateForm(FORM_PREFIX);
});

(document.querySelector('form') as HTMLElement).addEventListener('submit', async (e) => {
  e.preventDefault()

  const form = e.currentTarget as HTMLFormElement;
  const formData = new FormData(form);

  const formValues = Object.fromEntries(Array.from(formData.entries()).map(([key, value]) => {
    const keyWithoutPrefix = key.replace(form.dataset.formPrefix as string, '');
    const newKey = snakeCaseToCamelCase(keyWithoutPrefix);
    return [newKey, value]
  })) as unknown as CreateFormDTO;

  const loadingButton = createLoadingButton('#submit_btn');
  const loader = createLoader('#array_result_loader');

  loader.setLoading();
  loadingButton.setLoading();

  // wait at least one second to prevent the button flickering if the response from the server is almost instant
  const [response] = await Promise.all([
    createArray(formValues).then(res => res.json()),
    delay(500)
  ]);

  formPersistor.saveFormValuesToStorage(formValues);

  loader.setLoadingFinished();
  loadingButton.setLoadingFinished();

  const arrayResultElement = document.getElementById('array_result') as HTMLElement;

  arrayResultElement.hidden = false;
  (arrayResultElement.querySelector('code') as HTMLElement).textContent = response.body.toString();
})
