import { CSSProperties, Suspense } from "react";
import styles from "./button.module.css";
import Image from "next/image";

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

export function ButtonDefault({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <div className={styles.button_default} onClick={onClick}>
      <div className="B" style={{ color: "inherit" }}>
        {text}
      </div>
    </div>
  );
}

export function PricetagButton({
  text,
  onClick,
  style,
}: {
  text: string;
  onClick: () => void;
  style: CSSProperties;
}) {
  return (
    <Suspense>
      <div className={styles.pricetag_default} onClick={onClick} style={style}>
        <Image
          src="/icon/pricetag-default.png"
          alt="loading..."
          style={{ position: "absolute", top: 0, left: 0 }}
          width={86}
          height={42}
          priority
        />
        <div
          className="B"
          style={{ color: "#fff", zIndex: 1, position: "absolute" }}
        >
          {text}
        </div>
      </div>
    </Suspense>
  );
}

export function PricetagClicked({ style }: { style: CSSProperties }) {
  return (
    <div className={styles.pricetag_clicked} style={style}>
      <Image
        src="/icon/pricetag-clicked.png"
        alt="loading..."
        style={{ position: "absolute", top: 0, left: 0 }}
        width={86}
        height={42}
        priority
      />
    </div>
  );
}
