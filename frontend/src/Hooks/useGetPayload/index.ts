//~ Import modules
import { FormEvent } from 'react';
import { IPayload } from './Types';

//~ Functions
const useGetPayload = (form: FormEvent<HTMLFormElement>) => {
  const bodyData: IPayload = {};

  const formData = new FormData(form.currentTarget);
  //cannot put event.target because not serializable =>
  for (const [key, value] of formData) {
    bodyData[`${key}`] = value;
  }

  return [bodyData];
};

export { useGetPayload };
