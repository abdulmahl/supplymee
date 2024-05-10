import Image from "next/image";
import Header from "./partials/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <Header />
    </main>
  );
}
