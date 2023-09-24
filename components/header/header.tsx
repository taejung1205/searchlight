import { useState } from "react";
import styles from "./header.module.css";
import { Space } from "../space/space";
import Link from "next/link";

export function Header({ currentPage }: { currentPage: string }) {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  return (
    <div className={styles.header_box}>
      <img src="/logo/short_logotype.svg" className={styles.logo} />
      <img
        src="/icon/menu_open.svg"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setIsMenuOpened(true);
        }}
      />
      {isMenuOpened ? (
        <div className={styles.menu_box}>
          <img
            src="/icon/menu_close.svg"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsMenuOpened(false);
            }}
          />
          <Space h={40} />
          <div className={styles.menu_item_box}>
            <Link href={"/"}>
              <p className="P1" style={{ color: "#fff" }}>{`서치라이트 ${
                currentPage == "home" ? "●" : ""
              }`}</p>
            </Link>
            <div className={styles.line_thick} />
            <p className="P1" style={{ color: "#fff" }}>{`페어`}</p>
            <div className={styles.line_narrow} />
            <Link href={"/fair/2023"}>
              <p className="P2" style={{ color: "#BFBFBF" }}>{`2023년 ${
                currentPage == "fair_2023" ? "●" : ""
              }`}</p>
            </Link>
            <div className={styles.line_narrow} />
            <Link href={"/artist/image"}>
              <p className="P1" style={{ color: "#fff" }}>{`아티스트`}</p>
              <div className={styles.line_thick} />
            </Link>
            <Link href={"/artist/image"}>
              <p className="P2" style={{ color: "#BFBFBF" }}>{`이미지로 보기 ${
                currentPage == "artist_image" ? "●" : ""
              }`}</p>
            </Link>
            <div className={styles.line_narrow} />
            <Link href={"/artist/tag"}>
              <p className="P2" style={{ color: "#BFBFBF" }}>{`태그로 보기 ${
                currentPage == "artist_tag" ? "●" : ""
              }`}</p>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
