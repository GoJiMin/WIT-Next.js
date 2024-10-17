import { useState } from "react";
import { TAG_LIST, DETAIL_LIST } from "../consts/tagData";
import { Button } from "@/shared/ui/button";
import { Category } from "../model/category";

type Props = {
  setCategory: ({ categoryId, text }: Category) => void;
};

type Tag = {
  id: number;
  tagName: string;
};

export default function TagList({ setCategory }: Props) {
  const [tag, setTag] = useState<number>();

  const handleSetTag = (id: number) => {
    setTag(id);
    setCategory({ categoryId: null, text: "" });
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
          {DETAIL_LIST[tag - 1].map(
            ({ id: categoryId, tagName: text }: Tag) => (
              <li key={categoryId}>
                <Button
                  text={text}
                  handleClick={() => setCategory({ categoryId, text })}
                />
              </li>
            )
          )}
        </ul>
      )}
    </section>
  );
}
