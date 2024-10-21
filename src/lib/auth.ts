import CredentialsProvider from "next-auth/providers/credentials"
import { AuthOptions } from 'next-auth'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "E-mail", type: "text", placeholder: "E-mail" },
          password: { label: "Password", type: "password" }
        },

        async authorize(credentials, req) {
          
          const res = await fetch("http://localhost:3000/api/user", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })

          const user = await res.json()
         
          if (res.ok && user) {
            return user
          }
          return null
        }
      })
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error', // Error code passed in query string as ?error=
  },
  callbacks: {
    async session({ session, token, user, }){
       
      session.user = { ...session.user } as {
        id: string ;
        name: string;
        email: string;
      }

      return session;
    },
    async jwt({ token,user, account }) {
      
      if (account) {
        token.accessToken = user.access_token
      }
 
      return token
    },
    async redirect({ url, baseUrl }) {
         // Allows relative callback URLs
         if (url.startsWith("/")) return `${baseUrl}${url}`
         // Allows callback URLs on the same origin
         else if (new URL(url).origin === baseUrl) return url

         return baseUrl
    },
   
  }
}