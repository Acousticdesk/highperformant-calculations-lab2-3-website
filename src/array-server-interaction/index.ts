import { CreateFormDTO } from './interfaces';
import env from '../env';

export async function createArray(createFormDTO: CreateFormDTO) {
  return fetch(`${env.apiBaseUrl}?${new URLSearchParams(createFormDTO as unknown as Record<string, string>).toString()}`);
}
