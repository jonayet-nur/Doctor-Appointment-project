import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("doctor-manager");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  emailAndPassword: { 
    enabled: true, 
   
  }, 

  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENTID, 
            clientSecret: process.env.GOOGLE_SECRET,
            
        }, 
    },
});




// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db("doctor-manager");

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     client,
//   }),

//   emailAndPassword: {
//     enabled: true,
//   },

//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENTID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     },

//     github: {
//       clientId: process.env.GITHUB_CLIENTID,
//       clientSecret: process.env.GITHUB_SECRET,
//     },
//   },

//   account: {
//     accountLinking: {
//       enabled: true,
//       trustedProviders: ["google", "github"],
//     },
//   },
// });