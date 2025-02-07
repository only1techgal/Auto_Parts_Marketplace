import NextAuth, { DefaultSession } from "next-auth";

// Extend session.user to include role
declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      email: string;
      role: string;
    } & DefaultSession["user"];
  }
}
