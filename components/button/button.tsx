import styles from "./button.module.css";

export function Countbutton({
  count,
  isMobile = false,
}: {
  count: number;
  isMobile?: boolean;
}) {
  return (
    <div
      className={isMobile ? styles.count_button_mobile : styles.count_button}
    >{`${count.toString().padStart(6, "0")}th ON`}</div>
  );
}

export function GoToStoreButton({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div
      className={
        isMobile ? styles.go_to_store_button_mobile : styles.go_to_store_button
      }
    >
      스토어 바로가기
    </div>
  );
}
