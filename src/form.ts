import { createArray } from './array-server-interaction';
import { CreateFormDTO } from './array-server-interaction/interfaces';
import { createLoadingButton } from './loading-button';
import { snakeCaseToCamelCase } from './string';
import { delay } from './delay';

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

  loadingButton.setLoading();

  // wait at least one second to prevent the button flickering if the response from the server is almost instant
  await Promise.all([
    createArray(formValues),
    delay(500)
  ]);

  loadingButton.setLoadingFinished();
})
