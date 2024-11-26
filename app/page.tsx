import Image from "next/image";
import { metadata } from "./layout";
import Link from "next/link";
metadata.title = metadata.title + " | Главная";

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
        <div className="text-center flex items-center w-full justify-center">
        <Link
          href={"/login"}
          className="group transition duration-300 text-2xl text-red-900 hover:text-white"
        >
          Login
          <span className="block w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-red-600"></span>
        </Link></div>
        {/* <Link href="#" className="group text-sky-600 transition duration-300">
          Link
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </Link> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-col flex-nowrap items-center justify-center">
        <p>
          <b>Next.js + Laravel + Tailwind CSS + </b>on Vercel
        </p>
        <Link
          href="https://github.com/ugolnikov/next-js"
          className="text-red-900 hover:text-white hover:underline"
        >
          Ссылка на гитхаб
        </Link>
      </footer>
    </div>
  );
}
