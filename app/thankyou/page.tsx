import { Metadata } from "next";
import Header from "../partials/header";
import Footer from "../partials/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supplymee | Thank You",
};

export default function ThankYouPage() {
  return (
    <>
      <Header />

      <Link href={"/"}>
        <div className="flex flex-col w-[70px] items-center relative lg:left-10 md:opacity-45 md:hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-12 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <p className="absolute top-9">home</p>
        </div>
      </Link>
      <h1 className="text-xl text-center min-h-[68dvh] pt-[170px] p-3 text-customPink font-bold min-h-4 md:text-[46px] md:pt-[300px] md:min-h-[82dvh] md:text-balance md:leading-none lg:hidden">
        thank you for your message, we&apos;ll be in touch soon!
      </h1>
      <h1 className="hidden md:hidden lg:block lg:min-h-[70dvh] lg:pt-[190px] text-customPink font-bold text-xl text-center lg:text-[46px] leading-none">
        thank you for your message, <br />
        we&apos;ll be in touch soon!
      </h1>
      <Footer />
    </>
  );
}
