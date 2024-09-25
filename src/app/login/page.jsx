"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { signIn } from "next-auth/react"
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";

export default function LoginPage() {
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const resp = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (resp?.error) {
      console.log('Login failed:', resp.error);
    } else {
      console.log('Login successful:', resp);
    }
  };

  return (
    <div className='container mx-auto px-24 py-24'>
      <div className='grid grid-cols-2 gap-12 items-center'>
        <div>
          <Image src="/assets/images/login/login.svg" height={"340"} width={"340"} alt="Login Image"/>
        </div>
        <div className='border-2 p-6'>
          <h6 className='text-3xl font-semibold  text-center mb-5'>Sign In</h6>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email </label><br/>
            <input type="text" placeholder="Your Email" name="email" className="input input-bordered w-full mt-3 mb-3" /><br/>
            <label htmlFor="password">Password </label><br/>
            <input type="password" placeholder="password" name="password" className="input input-bordered w-full mt-3" />
            <br/>
            <button type='submit' className='mt-6 font-extrabold text-2xl text-center w-full btn text-orange-500 hover:bg-blue-500 bg-slate-300'>Sign In</button><br/>
          </form>

          <div>
            <h6 className='my-6 text-center'>or sign in with</h6>
            <div className='flex items-center justify-center space-x-3'>
              <button className='btn hover:bg-blue-500 flex items-center justify-center'><FaFacebook /> </button>
              <button className='btn hover:bg-blue-500 flex items-center justify-center'><FaGoogle /></button>
              <button className='btn hover:bg-blue-500 flex items-center justify-center'><FaGithub /> </button>
            </div>
            <h6 className='my-6 text-center'>Not have account? <Link className='text-orange-500 hover:text-blue-500 font-semibold' href={'/signUp'}>Sign Up</Link></h6>
          </div>
        </div>
      </div>
    </div>
  )
}

// "use client"
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link';
// import {signIn} from "next-auth/react"
// import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
// import { redirect } from 'next/dist/server/api-utils';
// // import { FaGoogle } from "react-icons/fa";
// // import { FaGithub } from "react-icons/fa6";

// export default function page() {
//     const handleLogin =async (event) =>{
//       event.preventDefault();
//       const email = event.target.email.value;
//       const password = event.target.password.value;
//       const resp = signIn('credentials',{
//         email,
//         password,
//         redirect: false
//       });
//       console.log(resp)

//     };
//   return (
//     <div className='container mx-auto px-24 py-24'>
//         {/* <h1 className='text-red-700 font-semibold'>Login Page</h1> */}
//         <div className='grid grid-cols-2 gap-12 items-center'>
//             <div>
//                 <Image src="/assets/images/login/login.svg" height={"340"} width={"340"} alt="Login Image"/>
//             </div>
//             <div className='border-2 p-6'>
//             <h6 className='text-3xl font-semibold  text-center mb-5'>Sign In</h6>
//             <form onSubmit={handleLogin} action="">
//             <label htmlFor="email" >Email </label><br/>
//                 <input type="text" placeholder="Your Email" name ="email" className="input input-bordered w-full  mt-3 mb-3" /><br/>
//                 <label htmlFor="email" className=''>Password </label><br/>
//                 <input type="text" placeholder="password"  name ="password" className="input input-bordered w-full  mt-3" />
//             <br/>
//             <button type='submit' className='mt-6  font-extrabold text-2xl text-center w-full btn text-orange-500 hover:bg-blue-500 bg-slate-300  '>Sign In</button><br/>
//             </form>

                
//             <div>
//             <h6 className='my-6 text-center'>or sign in with</h6>
//             <div className='flex items-center justify-center space-x-3'>
//                 <button className='btn hover:bg-blue-500  flex items-center justify-center'><FaFacebook /> </button>
//                 <button className='btn hover:bg-blue-500 flex items-center justify-center'><FaGoogle /></button>
//                 <button className='btn hover:bg-blue-500 flex items-center justify-center'> <FaGithub /> </button>

//             </div>
//             <h6 className='my-6 text-center'>Not have account? <Link className='text-orange-500 hover:text-blue-500 font-semibold' href={'/signUp'}>Sign Up</Link></h6>

           
//               </div>
                
            
//             </div>

//         </div>
      
//     </div>
//   )
// }
