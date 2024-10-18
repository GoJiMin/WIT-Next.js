import { Button } from "@/shared/ui/button";
import { DETAIL_LIST } from "../consts/tagData";
import { Category, Tag } from "../model/category";
import styles from "../styles.module.css";

type Props = {
  tag: number;
  selectedId: number | null;
  setCategory: ({ categoryId, text }: Category) => void;
};

export default function DetailList({ tag, selectedId, setCategory }: Props) {
  return (
    <ul key={tag} className={styles.detailList}>
      {DETAIL_LIST[tag - 1].map(({ id: categoryId, tagName: text }: Tag) => {
        const activeStyle = selectedId === categoryId ? `${styles.active}` : "";
        const defaultStyle = `${styles.detail} ${activeStyle}`;

        return (
          <li className={defaultStyle} key={categoryId}>
            <Button
              text={text}
              handleClick={() => setCategory({ categoryId, text })}
            />
          </li>
        );
      })}
    </ul>
  );
}
