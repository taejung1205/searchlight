import { useState } from "react";
import styles from "./header.module.css";
import { Space } from "../space/space";
import Link from "next/link";

export function Header({
  currentPage,
  isFixed = false,
  isMobile = false,
}: {
  currentPage: string;
  isFixed?: boolean;
  isMobile?: boolean;
}) {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  return (
    <>
      <div className={isFixed ? styles.fixed_filler : styles.none} />
      <div
        className={
          isMobile
            ? isFixed
              ? styles.header_box_fixed_mobile
              : styles.header_box_mobile
            : isFixed
            ? styles.header_box_fixed
            : styles.header_box
        }
      >
        <img src="/logo/short_logotype.svg" className={styles.logo} />
        <img
          src="/icon/menu_open.svg"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsMenuOpened(true);
          }}
        />
      </div>
      {isMenuOpened ? (
        <div className={isMobile ? styles.menu_box_mobile : styles.menu_box}>
          <img
            src="/icon/menu_close.svg"
            className={styles.menu_close_button}
            onClick={() => {
              setIsMenuOpened(false);
            }}
          />
          <div className={isMobile ?  styles.menu_item_box_mobile : styles.menu_item_box}>
            <div className="A1" style={{color: "#fff"}}>SEARCHLIGHT</div>
            <Space w={200} h={50} />
            <div>
              <div className="D1" style={{ color: "#fff" }}>{`FAIR`}</div>
              <Space h={10}/>
              <div className={styles.line_narrow} />
              <Space h={13}/>
              <Link href={"/fair/2023"}>
                <div className="A1" style={{ color: "#fff" }}>{`2023년 ${
                  currentPage == "/fair/2023" ? "●" : ""
                }`}</div>
              </Link>
              <Space h={30}/>
              <div className="D1" style={{ color: "#fff" }}>{`ARTIST ${
                currentPage == "/detail" ? "●" : ""
              }`}</div>
              <Space h={10}/>
              <div className={styles.line_narrow} />
              <Space h={13}/>
              <Link href={"/artist/image"}>
                <div
                  className="A1"
                  style={{ color: "#fff" }}
                >{`이미지로 보기 ${
                  currentPage == "/artist/image" ? "●" : ""
                }`}</div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
