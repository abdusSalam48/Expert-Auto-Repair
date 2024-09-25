// import { connectDB } from '../../../../connectDB';
// import { connectDB } from '../../../connectDB';
import { connectDB } from "@/lib/connectDB";


export async function POST(req) {
    try {
        const db = await connectDB();
        const { name, email, password } = await req.json(); // ফর্মের ডাটা রিকোয়েস্ট থেকে আনল

        // ডাটাবেজে ডাটা ইনসার্ট করা
        const result = await db.collection('users').insertOne({ name, email, password });
        
        return new Response(JSON.stringify({ message: 'User created successfully', result }), {
            status: 201,
        });
    } catch (error) {
        console.error('Database error:', error);
        return new Response(JSON.stringify({ message: 'Failed to insert user' }), {
            status: 500,
        });
    }
}

// // import { connectDB } from '../../lib/connectDB';
// import { connectDB } from "@/lib/connectDB";

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     // MongoDB এর সাথে সংযোগ স্থাপন
//     const db = await connectDB();

//     // রিকোয়েস্ট থেকে ডাটা বের করা
//     const { name, email, password } = req.body;

//     try {
//       // ডাটা MongoDB তে ইনসার্ট করা
//       const result = await db.collection('users').insertOne({ name, email, password });
      
//       // সফল হলে রেসপন্স
//       res.status(201).json({ message: 'User created successfully', result });
//     } catch (error) {
//       console.error('Error inserting data:', error);
//       res.status(500).json({ message: 'Database insertion failed' });
//     }
//   } else {
//     res.status(405).json({ message: 'Only POST requests are allowed' });
//   }
// }

//video code
// import { connectDB } from "@/lib/connectDB";
// // import bcrypt from "bcrypt";

// export const POST = async (request) =>{
//     const newUser = await request.json();
//     try {
//         const db = await connectDB()
//         const userCollection = db.collection('users');

//         // const userCollection = db.userCollection('users')
//         const exist =await userCollection.findOne({email: newUser.email})
//         if(exist){
//             return Response.json({message: 'user Exist'}, {status:304})

//         }
//         // const hashedPassword = bcrypt.hashSync(newUser.password,14);
//         // const resp = await userCollection.insertOne({...newUser, password: hashedPassword});
//         // return Response.json({message: "User Created"}, {status: 200})
//         return new Response(JSON.stringify({message: 'User Created'}), {status: 200});

//     } catch (error) {
//         return Response.json({message: 'Something went wrong', error}, {status:500})

        
//     }
// }