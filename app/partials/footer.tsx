import React from "react";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  return (
    <footer>
      <p>
        copyright &copy; <span>{date.getFullYear()}</span> MEE CORP dba{" "}
        <Link href={"/"}>supplymee.io</Link>
      </p>
    </footer>
  );
}
