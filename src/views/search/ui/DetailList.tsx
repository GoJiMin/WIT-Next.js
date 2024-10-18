import styles from "../styles.module.css";
import { DETAIL_LIST } from "../consts/tagData";
import { Category, Tag } from "../model/types";
import { useSearchState, useSearchStateActions } from "../model/store";
import { Button } from "@/shared/ui/button";

export default function DetailList() {
  const {
    tag,
    category: { categoryId: selectedId },
  } = useSearchState();
  const { setCategory } = useSearchStateActions();

  const handleSetCategory = ({ categoryId, text }: Category) => {
    setCategory({ categoryId, text });
  };

  return (
    <>
      {tag && (
        <ul key={tag} className={styles.detailList}>
          {DETAIL_LIST[tag - 1].map(
            ({ id: categoryId, tagName: text }: Tag) => {
              const activeStyle =
                selectedId === categoryId ? `${styles.active}` : "";
              const defaultStyle = `${styles.detail} ${activeStyle}`;

              return (
                <li className={defaultStyle} key={categoryId}>
                  <Button
                    text={text}
                    handleClick={() => handleSetCategory({ categoryId, text })}
                  />
                </li>
              );
            }
          )}
        </ul>
      )}
    </>
  );
}
