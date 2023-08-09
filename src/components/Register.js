// import styles from "./style.module.css";


// export const Register =  () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     const onChangeEmail = (e) => {
//       setEmail(e.target.value);
//     };
  
//     const onChangePass = (e) => {
//       setPassword(e.target.value);
//     };
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log({ email, password });
//     }

//     return (<div>
//         <div className={styles.backGround}>
//    <div className={styles.frontPage}>       
//    <img className={styles.todo} src={todo} alt="todo" />
//         </div>

//          <div className={styles.usersInterface}>
//           <img className={styles.image} src={picture} alt="pic" />
//           <div className={styles.loginBox}>
//              <div className={styles.userInfo}>
//                    <p className={styles.todText}>Welcome to Todo-APP</p>
//               <form className={styles.form} onSubmit={handleSubmit}>                <input
//                   placeholder="username or email"
//                   className={styles.email}
//                   value={email}
//                   onChange={onChangeEmail}
//                 />

//                 <input
//                   placeholder="password"
//                   className={styles.password}
//                   value={password}
//                   onChange={onChangePass}
//                 />
//                 <button type="submit" className={styles.loginButton}>
//                   Login
//                 </button>
//                 <div className={styles.register}>
//                   <a href="h" className={styles.registerLink}>
//                     Register
//                   </a>
//                   <p className={styles.forgetPassword}>forget password ?</p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>)
// }