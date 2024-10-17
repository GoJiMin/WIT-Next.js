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
        <div className={styles.logoContainer}>
          <Image src="/image/Logo.png" alt="Logo Image" fill />
        </div>
        <p>WIT</p>
      </Link>
    </header>
  );
}
