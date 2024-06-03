import Header from "./partials/header";
import SectionOne from "./ui/section-one";
import SectionTwo from "./ui/section-two";
import SectionThree from "./ui/section-three";
import SectionFour from "./ui/section-four";
import SectionFive from "./ui/section-five";
import SectionSix from "./ui/section-six";
import Footer from "./partials/footer";
import type { Metadata } from "next";
import SendMessageForm from "./forms/form";

export const metadata: Metadata = {
  title: "Welcome to Supplymee.io",
  description: "Create using Nextjs",
};

export default function HomePage() {
  return (
    <main className="p-3 md:flex flex-col md:p-10">
      <Header />
      <SectionOne />
      <SendMessageForm />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </main>
  );
}
