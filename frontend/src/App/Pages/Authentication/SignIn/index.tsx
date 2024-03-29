//~ Imports Modules
import './Styles/main.scss';
import { FormEvent, useState, useEffect } from 'react';
import { useGetPayload } from '../../../../Hooks/useGetPayload';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../../Store/API/User/authentication';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Types/GlobalTypes/Store';
import { Form } from '../../../Components/IndexComponents';

//~ Component
const SignIn = () => {
  const [displayMsg, setDisplayMsg] = useState('User disconnected');
  const { user, connected } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user) {
      return setDisplayMsg(`User connected. Welcome ${user.username} :)`);
    }
  }, [user]);

  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const doSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const [bodyData] = useGetPayload(event);

      //~------------------------------ Signin
      const result = await login(bodyData).unwrap();

      if (result) {
        navigate('/dashboard');
      }
    } catch (err) {
      console.log('ERROR', err);
    }
  };

  return (
    <section className="signin">
      {!connected ? (
        <>
          <h1 className="big-title">Sign In</h1>
          <Form submit={doSignIn} />
        </>
      ) : (
        <h1>Message : {displayMsg}</h1>
      )}
    </section>
  );
};
export default SignIn;
