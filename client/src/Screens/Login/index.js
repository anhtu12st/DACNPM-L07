import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Footer, LoginForm } from '../../Components';
import { useUserContext } from '../../Contexts/UserContext';
import style from './Login.module.sass';

const LoginScreen = (props) => {
  const history = useHistory();
  const { isAuthenticated } = useUserContext();

  useEffect(() => {
    if (isAuthenticated())
      history.replace('/');
  })

  return (
    <div className={style.LoginScreen}>
      <div className={style.middleContainer}>
        <LoginForm LoggedIn={props.LoggedIn} />
      </div>
      <div className={style.rightContainer}>
        <Footer />
      </div>
    </div>
  );
};
export default LoginScreen;