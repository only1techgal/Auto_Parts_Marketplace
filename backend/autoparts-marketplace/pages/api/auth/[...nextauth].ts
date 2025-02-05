import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace this with real authentication logic (e.g., database lookup)
        const user = { id: 1, name: "John Doe", email: "john@example.com" };

        if (credentials.email === user.email && credentials.password === "password123") {
          return user;
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
});
