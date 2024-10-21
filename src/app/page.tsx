'use client'
// import Image from "next/image";
// import heroImg from '../assets/hero.png'

export default function Home() {
  const teste = process.env.NEXT_PUBLIC_TESTE;
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
      <h2 className="font-medium text-2xl mb-2">Gerencie sua empresa</h2>
      <h1 className="font-bold text-3xl md-8 text-blue-600 md:text-4xl">Atendimentos, clientes</h1>

{teste}
      {/* <Image
        src={heroImg}
        width={600}
        alt="Image hero do dev controle"
        className="max-w-sm md:max-w-xl"
      ></Image> */}
    </main>
  );
}
