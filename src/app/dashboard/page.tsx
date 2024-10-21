import { authOptions } from '@/lib/auth'
import {  getServerSession }  from 'next-auth'
import { getToken } from "next-auth/jwt"

export default async function Dashboard(){
    const session = await getServerSession(authOptions)
 
    return(
      <>
        <h1>Dashboard :  { session?.user.id}</h1>
      </>
    )
}