import Link from "next/link";
import Image from "next/image";

export default function SectionFour() {
  return (
    <>
      <div className="pt-[100px] p-5">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="">
            <div>
              <p className="text-customPink leading-none pt-10 pb-5 text-[36px] font-black md:pt-0 lg:text-[65px]">
                how we do what <br /> we do?
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
            <p className="hidden md:block lg:hidden">
              by partnering with the best manufacturers for <br /> each industry
              that we serve, locally and <br /> internationally, we provide our
              customers with <br /> the best quality products, at a far reduced
              rate. <br /> <br /> foremost in our minds is the sustainability
              and <br /> policies our suppliers value. We partner only with
              those whose impact is positive, on their employees and to the
              world as a whole.
            </p>
            {/* Desktop view text */}
            <p className="hidden md:hidden lg:block lg:text-[25px]">
              by partnering with the best manufacturers for <br /> each industry
              that we serve, locally and <br /> internationally, we provide our
              <br /> customers with the best quality products, at a far reduced
              rate.
            </p>
            <br />
            <p className="hidden md:hidden lg:block lg:text-[25px]">
              foremost in our minds is the sustainability and <br />
              policies our suppliers value. We partner <br /> only with those
              whose impact is positive, <br /> on their employees and to the
              world as a whole.
            </p>
          </div>
          <div>
            <Image
              src={"/image-two.jpg"}
              width={500}
              height={460}
              alt="Side Image One for mobile View"
              className="block md:hidden"
            />
            <Image
              src={"/image-two.jpg"}
              width={800}
              height={760}
              alt="Side Image One for Tablet/Desktop View"
              className="hidden md:block md:h-[380px] lg:h-[600px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
