import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: true,
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            username: credentials.username,
            password: credentials.password,
          },
        });
        if (user) {
          console.log(user);
          console.log('ini keeksekut anjing');
          return {
            id: user.id,
            name: user.username,
            email: user.email,
          };
        } 

        return new Error('error');
      },
    }),
  ],
})

export { handler as GET, handler as POST };

