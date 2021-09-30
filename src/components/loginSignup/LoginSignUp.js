// import React, { useState } from "react";
// import LoginImg from "../../assets/images/login.jpg";
// import SignUp from "../../assets/images/signup.jpg";
// import "./LoginSignUp.css";

// const LoginSignUp = () => {
//   const [signIn, setSignIn] = useState({});
//   const [signUp, setSignUp] = useState({});

//   function toggleForm() {
//     var container = document.querySelector(".container");
//     var section = document.querySelector("section");
//     container.classNameList.toggle("active");
//     section.classNameList.toggle("active");
//   }

//   return (
//     <section id="Login">
//       <div className="container">
//         <div className="user signinBx">
//           <div className="imgBx">
//             <img src={LoginImg} alt="" />
//           </div>
//           <div className="formBx">
//             <form>
//               <h2>Sign In</h2>
//               <input type="text" name="userName" placeholder="Username" />
//               <input type="password" name="password" placeholder="Password" />
//               <input type="submit" name="submitButton" value="Login" />
//               <p className="signup">
//                 don't have an account?{" "}
//                 <a href="##" onClick={toggleForm}>
//                   Sign up.
//                 </a>
//               </p>
//             </form>
//           </div>
//         </div>
//         <div className="user signupBx">
//           <div className="formBx">
//             <form>
//               <h2>Create an account</h2>
//               <input type="text" name="" placeholder="Username" />
//               <input type="email" name="" placeholder="Email Address" />
//               <input type="password" name="" placeholder="Create Password" />
//               <input type="password" name="" placeholder="Confirm Password" />
//               <input type="submit" name="" value="Sign up" />
//               <p className="signup">
//                 Already have an account?
//                 <a href="##" onClick={toggleForm}>
//                   Sign in.
//                 </a>
//               </p>
//             </form>
//           </div>
//           <div className="imgBx">
//             <img src={SignUp} alt="" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoginSignUp;
