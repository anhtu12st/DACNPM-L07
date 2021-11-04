import { Footer, LoginForm } from '../../Components';

const LoginScreen = (props) => {
  return (
    <div className="LoginScreen">
      <div className="left-container">
        <LoginForm />
      </div>
      <div className="right-container">
        <Footer />
      </div>
    </div>
  )
}
export default LoginScreen;
// const LoginScreen = () => {
//   return (
//     <div>
//       <main>
//         <div className="container">
//           <div className="login">
//             <form action method="post">
//               <h1>Đăng nhập</h1>
//               <div className="input-box">
//                 <i />
//                 <input type="text" placeholder="Tên đăng nhập" />
//               </div>
//               <div className="input-box">
//                 <i />
//                 <input type="password" placeholder="Mật khẩu" />
//               </div>
//               <div className="btn-box">
//                 <button type="submit">
//                   Đăng nhập
//                 </button>
//               </div>
//             </form>
//             <div className="to-signup">
//               Tạo tài khoản?
//               <Link to="/signup" className="signup">
//                 Đăng ký
//               </Link>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }
