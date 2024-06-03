import React from "react";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="bg-gray-100 p-7 text-right">
      <p>
        copyright &copy; <span>{date.getFullYear()}</span> MEE CORP dba <br />
        <Link href={"/"}>supplymee.io</Link>
      </p>
    </footer>
  );
}
