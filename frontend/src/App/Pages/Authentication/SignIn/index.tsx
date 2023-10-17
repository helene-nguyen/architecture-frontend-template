//~ Imports Modules
import './Styles/main.scss';
import { FormEvent, useState, useEffect } from 'react';
import { useGetPayload } from '../../../../Hooks/useGetPayload';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../../Store/API/User/authentication';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Types/GlobalTypes/Store';

//~ Component
const SignIn = () => {
  const [displayMsg, setDisplayMsg] = useState('User disconnected');
  const { user, status } = useSelector((state: RootState) => state.auth);

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

      {status === 'disconnected' ? (
        <form action="post" onSubmit={doSignIn}>
          <h1 className="big-title">Sign In</h1>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="email" defaultValue={'contact@yumicode.net'} />
          <label htmlFor="password">Password</label>
          <input type="text" placeholder="password" name="password" defaultValue={'N6y$Ozddzt=1aa'} />
          <button type="submit">submit</button>
        </form>
      ) : (
        <h1>Message : {displayMsg}</h1>
      )}
    </section>
  );
};
export default SignIn;
