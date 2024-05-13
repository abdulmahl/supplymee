export default function SectionTwo() {
  return (
    <>
      <div className="bg-gray-100 mt-[70px] p-8">
        <div className="text-pink-500  text-[25px] pb-10 font-black md:text-[35px] lg:text-[60px]">
          <p>why we do what we do.</p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:text-[30px]">
          <div className="flex flex-col">
            <span className="bg-black w-20 h-[2px] mb-2"></span>
            <p>
              to make the lives <br />
              of developers & <br /> procurement managers <br /> easier
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-black w-20 h-[2px] mb-2"></span>
            <p>
              to limit the delays <br />
              that constantly <br /> hinder projects{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-black w-20 h-[2px] mb-2"></span>
            <p>
              to establish a <br />
              new standard of
              <br /> quality to Africa{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
