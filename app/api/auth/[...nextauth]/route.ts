import NextAuth from "next-auth/next"
import { authOptions } from "../../lib/auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { connectMongoDB } from "@/app/lib/mongodb";
// import User from "@/app/models/user";
// import { NextAuthUser } from "../../types/type";


// export const authOptions: AuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {},
//       async authorize(
//         credentials: Record<string, string> | undefined
//       ): Promise<any> {
//         if (!credentials) return null;

//         const { email, password } = credentials;

//         try {
//           await connectMongoDB();
//           const userFromDb = await User.findOne({ email }).exec();

//           if (!userFromDb) {
//             return null;
//           }

//           const passwordsMatch = await bcrypt.compare(
//             password,
//             userFromDb.password
//           );

//           if (!passwordsMatch) {
//             return null;
//           }

//           // Map to NextAuthUser
//           const userResponse: NextAuthUser = {
//             email: userFromDb.email,
//             name: userFromDb.name,
//             role: userFromDb.role,
//             image: userFromDb.image,
//           };

//           return userResponse;
//         } catch (error) {
//           console.log("Error: ", error);
//           return null;
//         }
//       },
//     }),
//   ],

//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET ?? "default-secret",
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         // Ensure the user object is cast to NextAuthUser
//         token.user = user as NextAuthUser;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user && token.user) {
//         session.user = token.user as NextAuthUser;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/home",
//   },
// };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
