//~ Imports Modules
import './Styles/main.scss';
import { v4 as uuid } from 'uuid';
import InputComponent from './Input/InputComponent';

//~ Component
const Form = ({ action, submit }: any) => {
  const formOptions = [
    {
      labelName: 'email',
      labelValue: 'E-mail',
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      defaultValue: '',
    },
    {
      labelName: 'password',
      labelValue: 'Password',
      type: 'password',
      name: 'password',
      placeholder: 'Password',
    },
  ];

  return (
    <form action={action} onSubmit={submit}>
      {formOptions.map((option) => (
        <InputComponent
          id={uuid()}
          name={option.name}
          label={option.labelValue}
          ariaLabel={option.labelName}
          type={option.type}
          placeholder={option.placeholder}
        />
      ))}

      <button type="submit">submit</button>
    </form>
  );
};
export default Form;
