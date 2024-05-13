import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between md:gap-1">
        <Link href={"/"}>
          <p className="text-[18px] font-black lg:text-[44px]">supplymee.io</p>
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
        <Link href={"/become-client"}>
          <div className="bg-pink-500 text-[12px] rounded-[50px] px-4 py-4 font-bold md:text-[13px] md:hover:bg-pink-600 text-white lg:text-[25px]">
            become a client ➚
          </div>
        </Link>
      </div>
    </header>
  );
}
