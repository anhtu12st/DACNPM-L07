import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Footer,SignUpForm } from '../../Components';
import { useUserContext } from '../../Contexts/UserContext';
import style from './Signup.module.sass';

const SignupScreen = (props) => {
  const history = useHistory();
  const { isAuthenticated } = useUserContext();

  useEffect(() => {
    if (isAuthenticated())
      history.replace('/');
  })

  return (
    <div className={style.SignupScreen}>
      <div className={style.middleContainer}>
        <SignUpForm SignedUp={props.SignedUp}/>
      </div>
      <div className={style.rightContainer}>
        <Footer />
      </div>
    </div>
  );
};
export default SignupScreen;