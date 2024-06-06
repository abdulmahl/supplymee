import Link from "next/link";

export default function SectionSix() {
  return (
    <>
      <div className="p-5">
        <div className="bg-customPink text-white p-5 mt-[50px]">
          <p className="font-black pb-10 text-[48px] leading-none">
            let&apos;s work together.
          </p>

          {/* Text for sm view... */}
          <div className="block text-[20px] md:hidden">
            <p>
              let&apos;s make your life easier, <br />
              your projects <br />
              faster and your products <br /> more reliable.
            </p>
          </div>
          {/* Text for md / lg views*/}
          <div className="hidden md:block">
            <p className="md:text-[20px] lg:text-[25px]">
              let&apos;s make your life easier, your projects <br /> faster and
              your products more reliable.
            </p>
          </div>
          <div className="pt-5">
            <Link href={"/forms"}>
              <button className="text-[18px] w-[180px] border-[2px] p-3 rounded-[35px] md:hover:border-black md:hover:text-white">
                let us help you.
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
