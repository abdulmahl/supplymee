import React from "react";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="bg-gray-100 w-full p-7 text-right md:">
      <p className="block md:hidden">
        copyright &copy; <span>{date.getFullYear()}</span> MEE CORP dba <br />
        <Link href={"/"}>supplymee.io</Link>
      </p>

      <p className="hidden md:block">
        copyright &copy; <span>{date.getFullYear()}</span> MEE CORP dba{" "}
        <Link
          className="lg:hover:underline lg:underline-offset-2 lg:hover:decoration-customPink"
          href={"/"}
        >
          supplymee.io
        </Link>
      </p>
    </footer>
  );
}
