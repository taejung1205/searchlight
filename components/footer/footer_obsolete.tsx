"use client"
import Link from "next/link";
import styles from "./footer.obsolete.module.css";
import { useWindowSize } from "@/app/utils/hooks";
import { MOBILE_WIDTH } from "@/app/utils/constants";

export function Footer() {
  const windowSize = useWindowSize();

  if (windowSize.width > MOBILE_WIDTH) {
    return (
      <div className={styles.footer_box}>
        <Link href="/store">
          <div className={styles.marquee_box}> s
            <div className={styles.marquee_1}>
              <p>TURN ON SEARCHLIGHT🔦</p>
              <p>TURN ON SEARCHLIGHT🔦</p>
              <p>TURN ON SEARCHLIGHT🔦</p>
            </div>
            <div className={styles.marquee_2}>
              <p>TURN ON SEARCHLIGHT🔦</p>
              <p>TURN ON SEARCHLIGHT🔦</p>
              <p>TURN ON SEARCHLIGHT🔦</p>
            </div>
          </div>
        </Link>
        <div className={styles.info_box}>
          <div>
            <p className="FOOTER">
              SEARCHLIGHT 2023 THE ARTIST FAIR
              <br />
              서치라이트 2023 아티스트 페어
              <br />
              <br />
              2023.11.00.-11.00. (총 3일간) 00:00~00:00
              <br />
              LES601 성수(서울특별시 성동구 성수동2가 275-21)
            </p>
          </div>
          <div>
            <p className="FOOTER">
              contact to:
              <br />
              instagram
              <br />
              copyright
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.footer_box}>
        <Link href="/store">
          <div className={styles.marquee_box_mobile}>
            <div className={styles.marquee_1}>
              <p>TURN ON SEARCHLIGHT🔦</p>
            </div>
            <div className={styles.marquee_2}>
              <p>TURN ON SEARCHLIGHT🔦</p>
            </div>
          </div>
        </Link>
        <div className={styles.info_box_mobile}>
          <p className="FOOTER">
            SEARCHLIGHT 2023 THE ARTIST FAIR
            <br />
            서치라이트 2023 아티스트 페어
            <br />
            <br />
            2023.11.00.-11.00. (총 3일간) 00:00~00:00
            <br />
            LES601 성수(서울특별시 성동구 성수동2가 275-21)
            <br />
            <br />
            contact to:
            <br />
            instagram
            <br />
            copyright
          </p>
        </div>
      </div>
    );
  }
}
