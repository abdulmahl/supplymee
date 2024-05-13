import Link from "next/link";

export default function SectionSix() {
  return (
    <div className="bg-pink-500 text-white p-10 mt-[50px]">
      <div>
        <p className="font-black pb-10 text-3xl">let's work together.</p>
      </div>
      {/* Text for sm view... */}
      <div className="block md:hidden">
        <p>
          let’s make your life easier, your projects faster and your products
          more reliable.
        </p>
      </div>
      {/* Text for md / lg views*/}
      <div className="hidden md:block">
        <p>
          let’s make your life easier, your projects <br /> faster and your
          products more reliable.
        </p>
      </div>
      <div className="pt-5">
        <Link href={"/learn-more"}>
          <button className="w-[180px] border-[2px] p-3 rounded-[35px] md:hover:border-black md:hover:text-black">
            let us help you
          </button>
        </Link>
      </div>
    </div>
  );
}
