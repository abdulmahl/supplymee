import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const phoneUrl = "+27 66 101 8392";

  return (
    <header className="px-3 pt-4 lg:pt-10">
      <div className="flex items-center justify-between md:gap-1">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="Logo-Image"
            className="w-auto h-12 lg:h-16 lg:ml-10"
          />
        </Link>
        <Link target="_blank" href={`tel:${phoneUrl}`}>
          <div className="hidden lg:flex border items-center lg:hover:bg-white lg:hover:text-customPink hover:border-customPink gap-1 lg:px-9 bg-customPink p-3 text-white rounded-[70px] lg:mr-10">
            <p className="text-[20px]">give us a call</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-3.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </header>
  );
}
