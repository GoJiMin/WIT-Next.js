import { Tag } from "../model/category";
import { TAG_LIST } from "../consts/tagData";
import { Button } from "@/shared/ui/button";
import styles from "../styles.module.css";

type Props = {
  tag: number | null;
  setCategory: (id: number) => void;
};

export default function TagList({ tag, setCategory }: Props) {
  return (
    <ul className={styles.tagList}>
      {TAG_LIST.map(({ id, tagName }: Tag) => {
        const activeStyle = tag === id ? `${styles.active}` : "";
        const defaultStyle = `${styles.tag} ${activeStyle}`;

        return (
          <li className={defaultStyle} key={id}>
            <Button text={tagName} handleClick={() => setCategory(id)} />
          </li>
        );
      })}
    </ul>
  );
}
