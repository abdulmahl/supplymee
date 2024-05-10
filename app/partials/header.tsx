import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex gap-3">
        <p>supplymee.io</p>
        <div className="flex gap-2 mr-[98px]">
          <Link href={"/our-way"}>our way</Link>
          <Link href={"/our-services"}>our services</Link>
          <Link href={"/our-clients"}>our clients</Link>
        </div>
        <div className="bg-pink-400 text-white p-1 rounded-xl">
          <Link href={"/become-client"}>become a client ➚</Link>
        </div>
      </div>
    </header>
  );
}
