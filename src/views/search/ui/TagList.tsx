import { useState } from "react";
import { TAG_LIST, DETAIL_LIST } from "../consts/tagData";
import { Button } from "@/shared/ui/button";

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
            <Button text={tagName} handleClick={() => handleSetTag(id)} />
          </li>
        ))}
      </ul>
      {tag && (
        <ul>
          {DETAIL_LIST[tag - 1].map(({ id, tagName }: Tag) => (
            <li key={id}>
              <Button
                text={tagName}
                handleClick={() => setCategory(id, tagName)}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
