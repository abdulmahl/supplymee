import Link from "next/link";
import Image from "next/image";

export default function SectionOne() {
  return (
    <>
      <div className="pt-20">
        <div>
          <div>
            <p className="font-[25px] font-bold">WHY WE DO</p>
          </div>
          <div>
            <p className="text-pink-500 text-[36px] font-black md:text-[70px] leading-none">
              making your <br />
              life easier if you're <br /> a developer.
            </p>
          </div>
          <div className="flex gap-9 pt-[20px]">
            <Link href={"/learn-more"}>
              <button className="w-[180px] border-[2px] p-3 rounded-[35px] md:hover:border-pink-500 md:hover:text-pink-600">
                learn more
              </button>
            </Link>
            <Link href={"/our-why"}>
              <button className="w-[180px] border-[2px] p-3 rounded-[35px] md:hover:border-pink-500 md:hover:text-pink-600">
                our why
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-3 pt-[50px] md:flex-row md:gap-9">
            <div className="flex gap-1">
              <Image
                src={"/energy.png"}
                width={20}
                height={20}
                alt="Energy Saver Icon"
                className="bg-pink-500 rounded-[50px] p-3"
              />
              <p>commited to sustainability</p>
            </div>
            <div className="flex gap-1">
              <Image
                src={"/correct.png"}
                width={20}
                height={20}
                alt="Verified Icon"
                className="bg-pink-500 rounded-[50px] p-3"
              />
              <p>commited to quality</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
