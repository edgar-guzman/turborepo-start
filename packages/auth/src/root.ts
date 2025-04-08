import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@edgarguzman/prisma";
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import React from "react";

const options: NextAuthConfig = {
  debug: true,
  basePath: "/api/auth",
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [Discord],
  callbacks: {
    authorized({ auth }) {
      return !!auth;
    },
    session({ session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
    jwt({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;

      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};

const { auth: uncachedAuth } = NextAuth(options);

export const auth = React.cache(uncachedAuth);

export const { handlers, signIn, signOut } = NextAuth(options);
