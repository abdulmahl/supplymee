import Image from "next/image";
import Link from "next/link";

export default function SectionThree() {
  return (
    <div className="flex flex-col pt-[50px] gap-10 md:flex-row lg:gap-20">
      <div>
        <Image
          src={"/imageone.jpg"}
          width={500}
          height={560}
          alt="Side Image One for Mobile View"
          className="block md:hidden"
        />
        <Image
          src={"/imageone.jpg"}
          width={600}
          height={760}
          alt="Side Image One for Tablet/Desktop View"
          className="hidden md:block md:h-[430px] lg:h-[500px]"
        />
      </div>
      <div>
        <div className="text-pink-500 text-[25px] leading-none font-black md:text-[35px] lg:text-[65px]">
          <p>
            who are our <br /> clients?
          </p>
        </div>
        <div>
          {/* Mobile view port side text */}
          <p className="pt-5 lg:text-[25px] md:hidden">
            the people who need us belong to various <br />
            industries, in a wide variety of job positions. But, <br />
            all require better service, and a turn-key solution <br />
            for sourcing products. Some include:{" "}
          </p>

          {/* Tablet view port side text */}
          <p className="hidden pt-5 lg:text-[25px] md:block lg:hidden">
            the people who need us belong to various industries, in a wide{" "}
            variety
            <br /> of job positions. But, all require <br /> better service, and
            a turn-key solution for sourcing products. Some include:{" "}
          </p>

          {/* Desktop view port side text */}
          <p className="hidden pt-5 lg:text-[25px] md:hidden lg:block">
            the people who need us belong to various <br /> industries, in a
            wide variety of job positions. But, <br />
            all require better service, and a turn-key solution <br /> for
            sourcing products. Some include:{" "}
          </p>
        </div>
        <div className="flex flex-col pt-3 gap-3 lg:grid grid-rows-2 grid-cols-2">
          <div className="flex gap-1">
            <Image
              src={"/energy.png"}
              width={20}
              height={20}
              alt="Energy Saver Icon"
              className="bg-pink-500 rounded-[50px] p-3 lg:hidden"
            />
            <Image
              src={"/energy.png"}
              width={40}
              height={40}
              alt="Energy Saver Icon"
              className="hidden bg-pink-500 rounded-[50px] p-3 lg:block"
            />
            <p className="lg:text-[25px]">procurement managers</p>
          </div>
          <div className="flex gap-1">
            <Image
              src={"/energy.png"}
              width={20}
              height={20}
              alt="Energy Saver Icon"
              className="bg-pink-500 rounded-[50px] p-3 lg:hidden"
            />
            <Image
              src={"/energy.png"}
              width={40}
              height={40}
              alt="Energy Saver Icon"
              className="hidden bg-pink-500 rounded-[50px] p-3 lg:block"
            />
            <p className="lg:text-[25px]">hotel chains</p>
          </div>
          <div className="flex gap-1">
            <Image
              src={"/energy.png"}
              width={20}
              height={20}
              alt="Energy Saver Icon"
              className="bg-pink-500 rounded-[50px] p-3 lg:hidden"
            />
            <Image
              src={"/energy.png"}
              width={40}
              height={40}
              alt="Energy Saver Icon"
              className="hidden bg-pink-500 rounded-[50px] p-3 lg:block"
            />
            <p className="lg:text-[25px]">property developers</p>
          </div>
          <div className="flex gap-1">
            <Image
              src={"/energy.png"}
              width={20}
              height={20}
              alt="Energy Saver Icon"
              className="bg-pink-500 rounded-[50px] p-3 lg:hidden"
            />
            <Image
              src={"/energy.png"}
              width={40}
              height={40}
              alt="Energy Saver Icon"
              className="hidden bg-pink-500 rounded-[50px] p-3 lg:block"
            />
            <p className="lg:text-[25px]">construction companies</p>
          </div>
        </div>
        <div className="pt-5">
          <Link href={"/learn-more"}>
            <button className="w-[180px] border-[2px] p-3 rounded-[35px] md:hover:border-pink-500 md:hover:text-pink-600">
              learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
