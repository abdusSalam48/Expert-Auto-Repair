'use client';
import React from 'react';
import Image from 'next/image';

export default function SignUp() {
    const handleSignUp = async (event) => {
        event.preventDefault();

        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };
        const resp = await fetch("http://localhost:3000/signUp/api",{
            method: "POST",
            body: JSON.stringify(newUser),
            headers:{
                "content-type": "application/json"
            }
           
        })
        console.log(resp);
        // if(resp){
        //     event.target.reset()
        // }
        //show the output inspect console log
        // console.log(newUser)

        try {
            const response = await fetch('/signUp/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                const data = await response.json();
                alert('User added successfully');
                console.log(data);
            } else {
                alert('Failed to add user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='container mx-auto px-24 py-24'>
            <div className='grid grid-cols-2 gap-12 items-center'>
                <div>
                    <Image src="/assets/images/login/login.svg" height={340} width={340} alt="Login Image"/>
 
                </div>
                <div className='border-2 p-6'>
                    <h6 className='text-3xl font-semibold text-center mb-5'>Sign Up</h6>
                    <form onSubmit={handleSignUp}>
                        <label htmlFor="name">Name</label><br />
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full mt-3 mb-3" /><br />

                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full mt-3 mb-3" /><br />

                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" placeholder="Password" className="input input-bordered w-full mt-3 mb-3" /><br />

                        <button type="submit" className="mt-6 font-extrabold text-2xl text-center w-full btn text-orange-500 hover:bg-blue-500 bg-slate-300">Sign Up</button><br />
                    </form>
                </div>
            </div>
        </div>
    );
}

// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
// import Link from 'next/link';

// export default function SignupPage() {
//   const handleSignUp = async (event) => {
//     event.preventDefault();

//     const newUser = {
//       name: event.target.name.value,
//       email: event.target.email.value,
//       password: event.target.password.value,
//     };

//     try {
//       const response = await fetch('/api/page', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newUser),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('User created:', data);
//         alert('User created successfully!');
//       } else {
//         console.error('Signup failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className='container mx-auto px-24 py-24'>
//       <div className='grid grid-cols-2 gap-12 items-center'>
//         <div>
//           <Image src="/assets/images/login/login.svg" height={340} width={340} alt="Login Image"/>
//         </div>
//         <div className='border-2 p-6'>
//           <h6 className='text-3xl font-semibold  text-center mb-5'>Sign Up</h6>
//           <form onSubmit={handleSignUp}>
//             <label htmlFor="name">Name </label><br/>
//             <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full  mt-3 mb-3" /><br/>
//             <label htmlFor="email">Email </label><br/>
//             <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full  mt-3 mb-3" /><br/>
//             <label htmlFor="password" className=''>Password </label><br/>
//             <input type="password" name="password" placeholder="password" className="input input-bordered w-full  mt-3" /><br/>
//             <button type='submit' className='mt-6  font-extrabold text-2xl text-center w-full btn text-orange-500 hover:bg-blue-500 bg-slate-300'>
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
// import Link from 'next/link';

// export default function Page() {
//   const handleSignUp = async (event) => {
//     event.preventDefault();
//     const newUser = {
//       name: event.target.name.value,
//       email: event.target.email.value,
//       password: event.target.password.value,
//     };
//     console.log(newUser);
//   }

//   return (
//     <div className='container mx-auto px-24 py-24'>
//         <div className='grid grid-cols-2 gap-12 items-center'>
//             <div>
//                 <Image 
//                   src="/assets/images/login/login.svg" 
//                   height={340} 
//                   width={340} 
//                   alt="Login Image"
//                   layout="responsive" 
//                 />
//             </div>
//             <div className='border-2 p-6'>
//                 <h6 className='text-3xl font-semibold text-center mb-5'>Sign Up</h6>
//                 <form onSubmit={handleSignUp}>

//                   <label htmlFor="name">Name </label><br />
//                   <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full mt-3 mb-3" /><br />

//                   <label htmlFor="email">Email </label><br />
//                   <input type="text" name="email" placeholder="Your Email" className="input input-bordered w-full mt-3 mb-3" /><br />

//                   <label htmlFor="password">Password </label><br />
//                   <input type="text" name="password" placeholder="password" className="input input-bordered w-full mt-3" /><br />

//                   <button type='submit' className='mt-6 font-extrabold text-2xl text-center w-full btn text-orange-500 hover:bg-blue-500 bg-slate-300'>Sign Up</button><br />
//                 </form>

//                 <div>
//                   <h6 className='my-6 text-center'>or sign in with</h6>
//                   <div className='flex items-center justify-center space-x-3'>
//                     <button className='btn hover:bg-blue-500 flex items-center justify-center'><FaFacebook /></button>
//                     <button className='btn hover:bg-blue-500 flex items-center justify-center'><FaGoogle /></button>
//                     <button className='btn hover:bg-blue-500 flex items-center justify-center'><FaGithub /></button>
//                   </div>

//                   <h6 className='my-6 text-center'>Already have an account? 
//                     <Link className='text-orange-500 hover:text-blue-500 font-semibold' href={'/login'}>Login</Link>
//                   </h6>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
// import Link from 'next/link';

// export default function page() {
//   const signUpPage = () =>{
//   const handleSignUp =async (event) =>{
//     event.preventDefault();
//     const newUser = {
//       name: event.target.name.value,
//       email: event.target.email.value,
//       password: event.target.password.value,
//     };
//     console.log(newUser);
  
//   }
// }

//   return (
//     <div className='container mx-auto px-24 py-24'>
//         {/* <h1 className='text-red-700 font-semibold'>Login Page</h1> */}
//         <div className='grid grid-cols-2 gap-12 items-center'>
//             <div>
//                 <Image src="/assets/images/login/login.svg" height={340} width={340} alt="Login Image"/>
//             </div>
//             <div className='border-2 p-6'>
//             <h6 className='text-3xl font-semibold  text-center mb-5'>Sign Up</h6>
//             <form onSubmit={signUpPage} action="">

//             <label htmlFor="name">Name </label><br/>
//             <input type="text" placeholder="Your name" className="input input-bordered w-full  mt-3 mb-3" /><br/>

//             <label htmlFor="email">Email </label><br/>
//                 <input type="text" placeholder="Your Email" className="input input-bordered w-full  mt-3 mb-3" /><br/>
//                 <label htmlFor="email" className=''>Password </label><br/>
//                 <input type="text" placeholder="password" className="input input-bordered w-full  mt-3" />
//             <br/>
//             <button type='submit' className='mt-6  font-extrabold text-2xl text-center w-full btn text-orange-500 hover:bg-blue-500 bg-slate-300  '>Sign Up</button><br/>
//             </form>

                
//             <div>
//             <h6 className='my-6 text-center'>or sign in with</h6>
//             <div className='flex items-center justify-center space-x-3'>
//                 <button className='btn hover:bg-blue-500  flex items-center justify-center'><FaFacebook /> </button>
//                 <button className='btn hover:bg-blue-500 flex items-center justify-center'><FaGoogle /></button>
//                 <button className='btn hover:bg-blue-500 flex items-center justify-center'> <FaGithub /> </button>

//             </div>
//             <h6 className='my-6 text-center'>Already have an account? <Link className='text-orange-500 hover:text-blue-500 font-semibold' href={'/login'}>Login</Link></h6>

           
//               </div>
                
            
//             </div>

//         </div>
      
//     </div>
//   )
// }

