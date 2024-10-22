"use client";

import { useEffect, useState } from "react";
import styles from "../styles.module.css";

type Props = {
  visibility: boolean;
  children: React.ReactNode;
};

export default function SideBar({ visibility, children }: Props) {
  const [repeat, setRepeat] = useState<number | null>(null);
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);

  useEffect(() => {
    if (visibility) {
      if (repeat) clearTimeout(repeat);

      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      if (repeat) clearTimeout(repeat);

      setRepeat(
        window.setTimeout(() => {
          setVisibilityAnimation(false);
        }, 100)
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibility]);

  return (
    <article
      className={`${styles.sideBar} ${
        visibility ? `${styles.fadeIn}` : `${styles.fadeOut}`
      }`}
    >
      {visibilityAnimation && children}
    </article>
  );
}
