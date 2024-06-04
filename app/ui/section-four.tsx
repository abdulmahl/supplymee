import Image from "next/image";

export default function SectionFour() {
  return (
    <>
      <div className="pt-[80px] p-3">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center">
          <div className="">
            <div>
              <p className="text-customPink leading-none pt-10 pb-5 text-[36px] md:text-[48px] font-black md:pt-0 lg:hidden">
                how we do <br />
                what <br />
                we do?
              </p>
              <p className="hidden md:hidden lg:block text-customPink leading-none pt-10 pb-5 text-[36px] md:text-[48px] font-black md:pt-0 lg:text-[60px] lg:ml-10">
                how we do what <br />
                we do?
              </p>
            </div>
            {/* Mobile view text */}
            <p className="block text-[18px] md:hidden">
              by partnering with the best manufacturers for each industry that
              we serve, locally and internationally, we provide our customers
              with the best quality products, at a far reduced rate. <br />{" "}
              <br /> foremost in our minds is the sustainability and policies
              our suppliers value. We partner only with those whose impact is
              positive, on their employees and to the world as a whole.
            </p>
            {/* Tablet view text */}
            <p className="hidden md:block text-[18px] lg:hidden">
              by partnering with the best <br />
              manufacturers for each industry that <br />
              we serve, locally and internationally, <br />
              we provide our customers with the <br />
              best quality products, at a far <br />
              reduced rate.
              <br /> <br />
              foremost in our minds is the <br />
              sustainability and policies our <br />
              suppliers value. We partner only with <br />
              those whose impact is positive, on <br />
              their employees and to the world as <br />a whole.
            </p>
            {/* Desktop view text */}
            <p className="hidden md:hidden lg:block lg:text-[18px] lg:ml-10">
              by partnering with the best manufacturers for each industry that
              we serve, locally and internationally, we provide our customers
              with the best quality products, at a far reduced rate.
            </p>
            <br />
            <p className="hidden md:hidden lg:block lg:text-[18px] lg:ml-10">
              foremost in our minds is the sustainability and policies our
              suppliers value. We partner only with those whose impact is
              positive, on their employees and to the world as a whole.
            </p>
          </div>

          <Image
            src={"/client-img1.webp"}
            width={500}
            height={560}
            alt="Side Image One for mobile View"
            className="block md:hidden"
          />
          <Image
            src={"/client-img1.webp"}
            width={328}
            height={241}
            alt="Side Image One for Tablet/Desktop View"
            className="hidden md:block md:ml-10 lg:w-[652px] lg:h-[514px]"
          />
        </div>
      </div>
    </>
  );
}
