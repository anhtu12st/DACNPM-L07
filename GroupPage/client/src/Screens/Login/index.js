import { Footer, LoginForm } from '../../Components';
import style from './Login.module.sass';

const LoginScreen = (props) => {
  return (
    <div className={style.LoginScreen}>
      <div className={style.middleContainer}>
        <LoginForm LoggedIn={props.LoggedIn}/>
      </div>
      <div className={style.rightContainer}>
        <Footer />
      </div>
    </div>
  );
};
export default LoginScreen;