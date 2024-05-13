import Link from "next/link";
import Image from "next/image";

export default function SectionFour() {
  return (
    <>
      <div className="pt-10">
        <div className="flex flex-col-reverse md:flex-row lg:gap-20">
          <div className="">
            <div>
              <p className="text-pink-500 leading-none pb-10 text-3xl font-black lg:text-[65px]">
                how we do what <br /> we do?
              </p>
            </div>
            {/* Mobile view text */}
            <p className="block md:hidden">
              by partnering with the best manufacturers for each industry that
              we serve, locally and internationally, we provide our customers
              with the best quality products, at a far reduced rate. <br />{" "}
              <br /> foremost in our minds is the sustainability and policies
              our suppliers value. We partner only with those whose impact is
              positive, on their employees and to the world as a whole.
            </p>
            {/* Tablet view text */}
            <p className="hidden md:block lg:hidden">
              by partnering with the best manufacturers for each industry that
              we serve, locally and internationally, we provide our customers
              with the best quality products, at a far reduced rate. <br />{" "}
              <br /> foremost in our minds is the sustainability and policies
              our suppliers value. We partner only with those whose impact is
              positive, on their employees and to the world as a whole.
            </p>
            {/* Desktop view text */}
            <p className="hidden md:hidden lg:block lg:text-[25px]">
              by partnering with the best manufacturers for <br /> each industry
              that we serve, locally and <br /> internationally, we provide our
              customers with <br /> the best quality products, at a far reduced
              rate. <br /> foremost in our minds is the sustainability and{" "}
              <br />
              policies our suppliers value. We partner <br /> only with those
              whose impact is positive, <br /> on their employees and to the
              world as a whole.
            </p>
            <div className="pt-5">
              <Link href={"/learn-more"}>
                <button className="w-[180px] border-[2px] p-3 rounded-[35px] md:hover:border-pink-500 md:hover:text-pink-600">
                  learn more
                </button>
              </Link>
            </div>
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
              width={700}
              height={760}
              alt="Side Image One for Tablet/Desktop View"
              className="hidden md:block md:h-[370px] lg:ml-10 lg:h-[640px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
