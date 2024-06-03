import Header from "./partials/header";
import SectionOne from "./ui/section-one";
import SectionTwo from "./ui/section-two";
import SectionThree from "./ui/section-three";
import SectionFour from "./ui/section-four";
import SectionFive from "./ui/section-five";
import SectionSix from "./ui/section-six";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Supplymee.io",
  description: "Create by Abdul",
};

export default function HomePage() {
  return (
    <main className="p-3 md:flex flex-col md:p-10">
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
