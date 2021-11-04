import { Footer,SignUpForm } from '../../Components';
import style from './Signup.module.sass';

const SignupScreen = (props) => {
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