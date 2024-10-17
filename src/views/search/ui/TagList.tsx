import { useState } from "react";
import { TAG_LIST, DETAIL_LIST } from "../consts/tagData";

type Props = {
  setCategory: (id: number, tagName: string) => void;
};

type Tag = {
  id: number;
  tagName: string;
};

export default function TagList({ setCategory }: Props) {
  const [tag, setTag] = useState<number>();

  const handleSetTag = (id: number) => {
    setTag(id);
  };

  return (
    <section>
      <ul>
        {TAG_LIST.map(({ id, tagName }: Tag) => (
          <li key={id}>
            <button type="button" onClick={() => handleSetTag(id)}>
              {tagName}
            </button>
          </li>
        ))}
      </ul>
      {tag && (
        <ul>
          {DETAIL_LIST[tag].map(({ id, tagName }: Tag) => (
            <li key={id}>
              <button type="button" onClick={() => setCategory(id, tagName)}>
                {tagName}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
