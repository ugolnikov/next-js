import Image from "next/image";
import { metadata } from "./layout";
metadata.title = metadata.title + " | Главная";

// TODO : add animation

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <h1 className="text-center w-full text-3xl">Всем привеееет!</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={16}
          priority
        />
        <p className="text-3xl">+</p>
        <Image
          className="dark"
          src="/laravel.svg"
          alt="Laravel logo"
          width={120}
          height={16}
          priority
        />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-col flex-nowrap items-center justify-center">
        <p><b>Next.js + Laravel + Tailwind CSS + </b>on Vercel</p>
        <a href="https://github.com/ugolnikov/next-js" target="_blank" className="text-red-900 hover:text-white hover:underline">Ссылка на гитхаб</a>
      </footer>
    </div>
  );
}
