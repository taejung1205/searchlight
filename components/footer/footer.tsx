"use client";
import Link from "next/link";
import styles from "./footer.module.css";
import { useWindowSize } from "@/app/utils/hooks";
import { MOBILE_WIDTH } from "@/app/utils/constants";
import { useState } from "react";
import { Space } from "../space/space";

export function Footer({ isMobile = false }: { isMobile?: boolean }) {
  const windowSize = useWindowSize();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  if (isMobile) {
    return (
      <div
        className={styles.footer_box_mobile}
        onClick={() => setIsOpened((v) => !v)}
      >
        {isOpened ? (
          <div>
            <div className="F">SEARCHLIGHT THE ARTIST FAIR <br /> © LOFA SEOUL</div>
            <Space h={16} />
            <FooterLinks />
          </div>
        ) : (
          <div className="F">SEARCHLIGHT THE ARTIST FAIR</div>
        )}
      </div>
    );
  } else {
    return (
      <div
        className={styles.footer_box}
        onMouseEnter={() => setIsOpened(true)}
        onMouseLeave={() => setIsOpened(false)}
      >
        {isOpened ? (
          <div>
            <div className="F">SEARCHLIGHT THE ARTIST FAIR</div>
            <FooterLinks />
          </div>
        ) : (
          <div className="F">SEARCHLIGHT THE ARTIST FAIR</div>
        )}
        <div className="F">© LOFA SEOUL</div>
      </div>
    );
  }
}

function FooterLinks() {
  return (
    <div style={{ display: "flex" }}>
      <a
        href="https://www.instagram.com/searchlight_fair/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="F" style={{ textDecoration: "underline" }}>
          FAIR INSTAGRAM
        </div>
      </a>
      <div className="F" style={{ paddingLeft: 5, paddingRight: 5 }}>
        |
      </div>
      <a
        href="https://shoplostandfound.kr/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="F" style={{ textDecoration: "underline" }}>
          LOFA HOME
        </div>
      </a>
      <div className="F" style={{ paddingLeft: 5, paddingRight: 5 }}>
        |
      </div>
      <a
        href="https://www.instagram.com/lofa_seoul/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="F" style={{ textDecoration: "underline" }}>
          LOFA INSTAGRAM
        </div>
      </a>
    </div>
  );
}
