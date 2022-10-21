import { CreateFormDTO } from './interfaces';
import env from '../env';

export async function createArray(createFormDTO: CreateFormDTO) {
  return fetch(env.apiBaseUrl, { method: 'POST', body: JSON.stringify(createFormDTO) });
}
