import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between md:gap-1">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="Logo-Image"
            className="w-[280px]"
          />
        </Link>
        <div className="flex gap-2 mr-[60px] lg:mr-[450px] gap-5 text-[20px]">
          <Link
            href={"/our-way"}
            className="hidden md:block md:hover:text-pink-600"
          >
            our way
          </Link>
          <Link
            href={"/our-services"}
            className="hidden md:block md:hover:text-pink-600"
          >
            our services
          </Link>
          <Link
            href={"/our-clients"}
            className="hidden md:block md:hover:text-pink-600"
          >
            our clients
          </Link>
        </div>
        <Link href={"/"}>
          <div className="hidden md:flex items-center gap-1 bg-customPink p-3">
            <p className="text-[13px]">give us call</p>
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
