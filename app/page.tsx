import SectionOne from "./ui/section-one";
import SectionTwo from "./ui/section-two";
import SectionThree from "./ui/section-three";
import SectionFour from "./ui/section-four";
import SectionFive from "./ui/section-five";
import SectionSix from "./ui/section-six";
import type { Metadata } from "next";
import SendMessageForm from "./forms/form";

export const metadata: Metadata = {
  title: "Supplymee | Home",
  description: "Create using Nextjs",
};

export default function HomePage() {
  return (
    <main>
      <div className="md:flex md:py-16">
        <SectionOne />
        <SendMessageForm />
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </main>
  );
}
