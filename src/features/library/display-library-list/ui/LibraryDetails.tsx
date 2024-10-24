import { SimpleLibrary } from "@/entities/libraries";
import { KaKaoMap } from "@/features/display-kakao-map";
import { useCopyText } from "@/shared/lib/hooks/useCopyText";
import { BrowserIcon, CopyIcon, PhoneCallIcon } from "@/shared/ui/icons";

type Props = {
  library: SimpleLibrary;
};

export default function LibraryDetails({ library }: Props) {
  const { address, closed, homepage, latitude, libName, longitude, tel } =
    library;

  const { handleCopyText } = useCopyText();

  return (
    <section>
      <header>
        <p>{libName}</p>
        <article>
          <a href={`tel:${tel}`}>
            <PhoneCallIcon />
          </a>
          <a href={homepage} target="_blank" rel="nopoener noreferrer">
            <BrowserIcon />
          </a>
        </article>
      </header>
      <KaKaoMap latitude={latitude} longitude={longitude} />
      <article>
        <p>
          {address}
          <button onClick={() => handleCopyText(address)}>
            <CopyIcon />
          </button>
        </p>
        <p>{closed}은 쉬어요.</p>
      </article>
    </section>
  );
}
