import Link from "next/link";
import Image from "next/image";

export default function SectionOne() {
  return (
    <>
      <main className="py-16 px-5 lg:ml-10">
        <div className="max-w-7xl relative">
          <h1 className="text-customPink text-left text-5xl font-bold pb-10 lg:hidden">
            making your <br />
            life easier if <br />
            you&apos;re a <br />
            property <br />
            developer
            <span className="inline-block w-2 h-2 absolute top-[80.5%] rounded-full bg-customPink text-white text-center">
              .
            </span>
          </h1>

          <h1 className="hidden lg:block text-customPink text-left text-5xl font-bold md:text-6xl lg:text-7xl pb-10">
            making your life <br /> easier if you&apos;re a property <br />
            developer
            <span className="inline-block w-3 h-3 absolute top-[81%] rounded-full bg-customPink text-white text-center">
              .
            </span>
          </h1>
        </div>
        <p className="text-[20px] lg:hidden">
          we aim to serve those who suffer from <br />
          headaches caused by sourcing <br />
          products for the hospitality industry.
        </p>

        <p className="hidden text-[20px] lg:block">
          we aim to serve those who suffer from headaches caused by sourcing{" "}
          <br />
          products for the hospitality industry.
        </p>
        <div className="flex flex-col gap-3 pt-[5px] md:flex-row">
          <div className="flex items-center gap-1">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6 p-[2px] bg-customPink rounded-[50%]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              ></path>
            </svg>
            <p className="text-[20px] md:leading-none md:text-[18px]">
              commited to sustainability
            </p>
          </div>
          <div className="flex items-center gap-1 lg:ml-20">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6 p-[2px] bg-customPink rounded-[50%]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              ></path>
            </svg>
            <p className="text-[20px] md:leading-none md:text-[18px]">
              commited to quality
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
