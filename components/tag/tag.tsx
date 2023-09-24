import styles from "./tag.module.css";

export function NonButtonTag({ tag }: { tag: string }) {
  return (
    <div className={styles.tag_selected}>
      <p className="P1" style={{color: "#717171"}}>{tag}</p>
    </div>
  );
}
