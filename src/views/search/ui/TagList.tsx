import styles from "../styles.module.css";
import { TAG_LIST } from "../consts/tagData";
import { Tag } from "../model/types";
import { useSearchState, useSearchStateActions } from "../model/store";
import { Button } from "@/shared/ui/button";

export default function TagList() {
  const { tag } = useSearchState();
  const { setTag, setCategory } = useSearchStateActions();

  const handleSetTag = (id: number) => {
    setTag(id);
    setCategory({ categoryId: null, text: "" });
  };

  return (
    <ul className={styles.tagList}>
      {TAG_LIST.map(({ id, tagName }: Tag) => {
        const activeStyle = tag === id ? `${styles.active}` : "";
        const defaultStyle = `${styles.tag} ${activeStyle}`;

        return (
          <li className={defaultStyle} key={id}>
            <Button text={tagName} handleClick={() => handleSetTag(id)} />
          </li>
        );
      })}
    </ul>
  );
}
