import { SimpleLibrary } from "@/entities/libraries";
import { KaKaoMap } from "@/features/display-kakao-map";
import { useCopyText } from "@/shared/lib/hooks/useCopyText";
import { BrowserIcon, CopyIcon, PhoneCallIcon } from "@/shared/ui/icons";
import styles from "../styles.module.css";

type Props = {
  library: SimpleLibrary;
};

export default function LibraryDetails({ library }: Props) {
  const { address, closed, homepage, latitude, libName, longitude, tel } =
    library;

  const { handleCopyText } = useCopyText();

  return (
    <section className={styles.libraryDetails}>
      <KaKaoMap latitude={latitude} longitude={longitude} />
      <article className={styles.infoContainer}>
        <header className={styles.header_details}>
          <p className={styles.title}>{libName}</p>
          <article className={styles.linkContainer}>
            <a href={`tel:${tel}`}>
              <PhoneCallIcon />
            </a>
            <a href={homepage} target="_blank" rel="nopoener noreferrer">
              <BrowserIcon />
            </a>
          </article>
        </header>
        <p>
          {address}
          <button
            className={styles.copyBtn}
            onClick={() => handleCopyText(address)}
          >
            <CopyIcon />
          </button>
        </p>
        <p>{closed}은 쉬어요.</p>
      </article>
    </section>
  );
}
