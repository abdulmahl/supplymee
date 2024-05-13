import Image from "next/image";
import Header from "./partials/header";
import SectionOne from "./landing-page-components/section-one";
import SectionTwo from "./landing-page-components/section-two";
import SectionThree from "./landing-page-components/section-three";
import SectionFour from "./landing-page-components/section-four";
import SectionFive from "./landing-page-components/section-five";

export default function Home() {
  return (
    <main className="p-5 md:flex flex-col md:p-10">
      <div className="md:pb-20">
        <Header />
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </main>
  );
}
