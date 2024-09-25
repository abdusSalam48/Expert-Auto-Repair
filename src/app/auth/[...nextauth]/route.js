
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         const user = { id: 1, name: "User", email: credentials.email };
//         if (user) {
//           return user;
//         } else {
//           return null;
//         }
//       }
//     })
//   ],
//   pages: {
//     signIn: '/login',
//     error: '/auth/error'  // কাস্টম এরর পেজ
//   }
// };

// export default NextAuth(authOptions);

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         const user = { id: 1, name: "User", email: credentials.email };
//         return user;
//       }
//     })
//   ],
//   pages: {
//     signIn: '/login',
//   }
// });

// export { handler as GET, handler as POST };

// const { default: NextAuth } = require("next-auth/next");
import NextAuth from "next-auth/next";
// import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
// import { async } from './../../../lib/connectDB';
// import { connectDB } from "@/lib/connectDB";


const handler = NextAuth({
    session:{
        strategy:'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [ 
        CredentialsProvider({
            credentials:{
                email:{},
                password:{},
            },
            async authorize(credentials){
                return true;
            }

        })
    ],
    // callbacks:{},
    pages: {
        signIn: '/login',
    },

});
export {handler as Get, handler as POST}


// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
//     session: {
//         strategy: 'jwt',
//         maxAge: 30 * 24 * 60 * 60, // 30 দিন
//     },
//     providers: [
//         CredentialsProvider({
//             credentials: {
//                 email: { label: "Email", type: "email", placeholder: "your-email@example.com" },
//                 password: { label: "Password", type: "password" }
//             },
//             async authorize(credentials) {
//                 // এখানে ব্যবহারকারীর তথ্য যাচাই করুন
//                 const user = await findUserByEmail(credentials.email);
//                 if (user && user.password === credentials.password) {
//                     return user;
//                 }
//                 return null;
//             }
//         })
//     ],
//     callbacks: {
//         async jwt({ token, user }) {
//             if (user) {
//                 token.id = user.id;
//             }
//             return token;
//         },
//         async session({ session, token }) {
//             session.user.id = token.id;
//             return session;
//         }
//     },
//     pages: {
//         signIn: '/login',
//     },
// });

// export { handler as GET, handler as POST };
