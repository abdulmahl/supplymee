import Image from "next/image";

export default function SectionFive() {
  return (
    <>
      <div className="flex flex-col p-5 mt-[130px] gap-10 md:flex-row md:items-center lg:gap-20 lg:justify-center lg:pb-40">
        <div>
          <Image
            src={"/client-img2.webp"}
            width={500}
            height={560}
            alt="Side Image One for Mobile View"
            className="block md:hidden"
          />
          <Image
            src={"/client-img2.webp"}
            width={328}
            height={241}
            alt="Side Image One for Tablet/Desktop View"
            className="hidden md:block lg:w-[652px] lg:h-[450px]"
          />
        </div>
        <div className="">
          <div>
            <p className="text-customPink leading-none pb-5 text-3xl md:text-[48px] font-black lg:text-[60px]">
              what do we do?
            </p>
          </div>
          <p className="text-[18px] md:block lg:hidden">
            we offer a complete solution of <br />
            “after-construction” materials, <br />
            providing a range of furniture, <br />
            lighting, fabrics and flooring. This <br />
            solution aims to make the process of <br />
            procuring the most common <br />
            materials in the hospitality and <br />
            commercial industry as easy, and <br />
            quick as possible.
          </p>
          <p className="hidden text-[18px] md:hidden lg:block">
            we offer a complete solution of “after-construction” materials,
            providing a <br /> range of furniture, lighting, fabrics and
            flooring. This solution aims to make <br /> the process of procuring
            the most common materials in the hospitality and <br />
            commercial industry as easy, and quick as possible.
          </p>
        </div>
      </div>
    </>
  );
}
