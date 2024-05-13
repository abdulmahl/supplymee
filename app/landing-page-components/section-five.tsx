import Image from "next/image";
import Link from "next/link";

export default function SectionFive() {
  return (
    <>
      <div className="flex flex-col pt-10 gap-10 md:flex-row lg:gap-20">
        <div>
          <Image
            src={"/image-three.jpg"}
            width={500}
            height={560}
            alt="Side Image One for Mobile View"
            className="block md:hidden"
          />
          <Image
            src={"/image-three.jpg"}
            width={3000}
            height={760}
            alt="Side Image One for Tablet/Desktop View"
            className="hidden md:block md:h-[350px] lg:h-[480px]"
          />
        </div>
        <div>
          <div>
            <p className="text-pink-500 leading-none md:pt-0 pb-5 text-3xl font-black lg:text-[65px]">
              what do we do?
            </p>
          </div>
          <p className="lg:text-[25px]">
            we offer a complete solution of “after-construction” materials,
            providing a range of furniture, lighting, fabrics and flooring. This
            solution aims to make the process of procuring the most common
            materials in the hospitality and commercial industry as easy, and
            quick as possible.
          </p>
          <div className="pt-5">
            <Link href={"/learn-more"}>
              <button className="w-[180px] border-[2px] p-3 rounded-[35px] md:hover:border-pink-500 md:hover:text-pink-600">
                learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
