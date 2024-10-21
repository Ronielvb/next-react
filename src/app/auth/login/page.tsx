'use client'

import { signIn, signOut } from 'next-auth/react'
import React from "react";
import { useSession  } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default  function SignIn() {
    const { data: session, status}  = useSession()
    const router = useRouter()

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
      event.preventDefault();
      const target = event.currentTarget;

      const email = target.email.value
      const password =  target.senha.value

      signIn("credentials", {
        email,
        password,
        callbackUrl: `${window.location.origin}/`,
        redirect: false,
      }).then(function (result) {        
        //router.replace('/dashboard')
        console.log(result)                
      });
    }


    return (
      <main>
        {status === "unauthenticated" ? (
          <section className='w-full flex flex-col'>
            <form className="flex items-center justify-center  mx-auto " onSubmit={handleSubmit}>
              <div>Login</div>
              <input 
                type="text"
                id="email"
                placeholder="Email"
                />
                <input 
                type="password"
                id="senha"
                placeholder="Senha"
                />
                <button 
                      className="bg-blue-500 my-4 h-11 rounded text-white font-bold"
                      type="submit"
                  >Logar</button>
              </form>
            </section>
            ) : (
            <button 
                    className="bg-blue-500 my-4 h-11 rounded text-white font-bold"
                    onClick={ () => signOut() }
                >Logout
              </button>
          )}

      </main>

    )
  }
