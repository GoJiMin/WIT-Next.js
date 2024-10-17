import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles.module.css";
import { Sixtyfour } from "next/font/google";

const sistyFour = Sixtyfour({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className={`${sistyFour.className} ${styles.header}`}>
      <Link href="/" className={styles.link}>
        <Image src="/image/Logo.png" alt="Logo Image" width={45} height={45} />
        <p>WIT</p>
      </Link>
    </header>
  );
}
