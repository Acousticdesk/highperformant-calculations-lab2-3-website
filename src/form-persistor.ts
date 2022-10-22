import { CreateFormDTO } from './array-server-interaction/interfaces';
import { camelCaseToSnakeCase } from './string';

export default {
  saveFormValuesToStorage(formValues: CreateFormDTO) {
    const hydrationData = Object.fromEntries(
      Object.entries(formValues).map(([key, value]) => {
        return [camelCaseToSnakeCase(key), value];
      })
    );

    window.localStorage.setItem('sra_hydrate_from', JSON.stringify(hydrationData))
  },
  getFormValuesFromStorage() {
    return window.localStorage.getItem('sra_hydrate_from');
  },
  hydrateForm(formPrefix: string) {
    const hydrationData = this.getFormValuesFromStorage();

    if (hydrationData) {
      const values = JSON.parse(hydrationData) as Record<string, string>;

      Object.entries(values).forEach(([key, value]) => {
        (document.querySelector(`input[name="${formPrefix}${key}"]`) as HTMLInputElement).value = value;
      });
    }
  }
}
