import Header from "./partials/header";
import SectionOne from "./landing-page-components/section-one";
import SectionTwo from "./landing-page-components/section-two";
import SectionThree from "./landing-page-components/section-three";
import SectionFour from "./landing-page-components/section-four";
import SectionFive from "./landing-page-components/section-five";
import SectionSix from "./landing-page-components/section-six";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Supplymee.io",
  description: "Create by Abdul",
};

export default function HomePage() {
  return (
    <main className="p-5 m-auto md:flex flex-col md:p-10">
      <div className="md:pb-10">
        <Header />
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </main>
  );
}
