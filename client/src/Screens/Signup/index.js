import { Footer, SignUpForm } from "../../Components";
import "./style.sass";

const SignupScreen = () => {
  return (
    <div className="SignUp">
      <div className="left-container">
        <SignUpForm />
      </div>
      <div className="right-container">
        <Footer />
      </div>
    </div>
  )
}

export default SignupScreen;

// const SignupScreen = () => {
//   return (
//     <div className="SignupScreen">
//       <form action method="post">
//         <h1>Đăng ký</h1>
//         <div className="input-box">
//           <i />
//           <input type="text" placeholder="Email" />
//         </div>
//         <div className="input-box">
//           <i />
//           <input type="text" placeholder="Tên đăng nhập" />
//         </div>
//         <div className="input-box">
//           <i />
//           <input type="password" placeholder="Mật khẩu" />
//         </div>
//         <div className="input-box">
//           <i />
//           <input type="password" placeholder="Nhập lại mật khẩu" />
//         </div>
//         <div className="btn-box">
//           <button type="submit">
//             Đăng ký
//           </button>
//         </div>
//       </form>
//       <div className="to-login">
//         Đã có tài khoản ?
//         <Link to="/login" className="login">
//           Đăng nhập
//         </Link>
//       </div>
//     </div>
//   )
// }