import { MongoClient, ServerApiVersion } from 'mongodb';

let db;
export const connectDB = async () => {
    if (db) return db;
    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI || 'mongodb://127.0.0.1:27017/car-doctor'; // লোকাল URI বা প্রোডাকশনের জন্য .env ফাইল থেকে URI
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });
        await client.connect();
        console.log('Database connected');
        db = client.db('car-doctor');
        return db;
    } catch (error) {
        console.log('Database connection error:', error);
    }
};


// import { MongoClient, ServerApiVersion } from "mongodb";

// let db;
// export const connectDB = async () => {
//   if (db) return db;
//   try {
//     const uri = "mongodb://0.0.0.0:27017"; // Correct MongoDB URI
//     const client = new MongoClient(uri, {
//       serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       },
//     });
//     await client.connect();
//     console.log("Database connected");
//     db = client.db('car-doctor');
//     return db;
//   } catch (error) {
//     console.log("Database connection error:", error);
//   }
// };


// export const connectDB = async () => {
//     if (db) return db;
//     try {
//         const uri = "mongodb://0.0.0.0:27017";

//     //   const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

//     //    const uri = "mongodb+srv://ratul28:1234%40%23ab@third.vfzy5.mongodb.net/?retryWrites=true&w=majority&appName=third";

//       const client = new MongoClient(uri, {
//         serverApi: {
//           version: ServerApiVersion.v1,
//           strict: true,
//           deprecationErrors: true,
//         },
//       });
//       await client.connect(); // Ensure connection is awaited
//       console.log("Database connected");
//       db = client.db('car-doctor');
//       return db;
//     } catch (error) {
//       console.log("Database connection error:", error);
//     }
//   };
  

// import { MongoClient, ServerApiVersion } from "mongodb";

// let db;
// export const connectDB = async () =>{
//     if(db) return db;
//     try {
//         const uri = "mongodb+srv://ratul28:1234%40%23ab@third.vfzy5.mongodb.net/?retryWrites=true&w=majority&appName=third";

//         //   const uri = process.env.NEXT_PUBLIC_MONGODB_URI
//         //   const uri = "mongodb://localhost:27017";
//           const client = new MongoClient(uri,{
//             serverApi:{
//                 version: ServerApiVersion.v1,
//                 strict: true, 
//                 deprecationErrors:true,
//             },
//           });
//         db = client.db('car-doctor')
//         return db;
//     } catch (error) {
//         console.log(error)
        
//     }

// };