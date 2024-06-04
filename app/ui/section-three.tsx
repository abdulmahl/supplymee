import Image from "next/image";

export default function SectionThree() {
  return (
    <div className="flex flex-col p-5 pt-[50px] lg:pt-[200px] gap-10 md:pb-20 md:flex-row md:items-center lg:grid grid-cols-2 place-center lg:gap-0">
      <div>
        <Image
          src={"/client-img.webp"}
          width={500}
          height={560}
          alt="Side Image One for Mobile View"
          className="block md:hidden"
        />
        <Image
          src={"/client-img.webp"}
          width={328}
          height={241}
          alt="Side Image One for Tablet/Desktop View"
          className="hidden md:block lg:ml-10 lg:w-[625px] lg:h-[479px]"
        />
      </div>
      <div>
        <p className="text-customPink text-[36px] leading-none font-black md:text-[48px] lg:text-[65px]">
          who are our <br /> clients?
        </p>

        <div>
          {/* Mobile view port side text */}
          <p className="pt-5 text-[18px] md:hidden">
            the people who need us belong to <br />
            various industries, in a wide variety of job positions. But, all
            require better service, <br /> and a turn-key solution for sourcing{" "}
            <br />
            products. Some include:
          </p>

          {/* Tablet view port side text */}
          <p className="hidden md:text-[18px] pt-5 md:block lg:hidden">
            the people who need us belong to <br />
            various industries, in a wide variety of <br />
            job positions. But, all require better <br />
            service, and a turn-key solution for <br />
            sourcing products. Some include:
          </p>

          {/* Desktop view port side text */}
          <p className="hidden lg:pt-5 lg:text-[18px] md:hidden lg:block">
            the people who need us belong to various industries, in a wide
            variety of <br />
            job positions. But, all require better service, and a turn-key
            solution for sourcing products. Some include:{" "}
          </p>
        </div>
        <div className="flex flex-col md:grid pt-3 gap-1 lg:grid grid-rows-2 grid-cols-2">
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="white"
              className="size-6 bg-customPink rounded-[50%] p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>

            <p className="lg:text-[18px]">procurement managers</p>
          </div>
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="white"
              className="size-6 bg-customPink rounded-[50%] p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
              />
            </svg>

            <p className="lg:text-[18px]">hotel chains</p>
          </div>
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="white"
              className="size-6 bg-customPink rounded-[50%] p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <p className="lg:text-[18px]">property developers</p>
          </div>
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="white"
              className="size-6 bg-customPink rounded-[50%] p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>
            <p className="lg:text-[18px]">facilities managers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
