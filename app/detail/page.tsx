"use client";

import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Space } from "@/components/space/space";
import { NonButtonTag } from "@/components/tag/tag";
import { ButtonDefault } from "@/components/button/button";
import { useScrollY, useWindowSize } from "../utils/hooks";
import { MOBILE_WIDTH } from "../utils/constants";
import Link from "next/link";

export default function Page() {
  const scrollY = useScrollY();
  const searchParams = useSearchParams();
  const windowSize = useWindowSize();
  const index = searchParams.get("index") ?? "";
  const isMobile = windowSize.width < MOBILE_WIDTH;

  if (index.length == 0) {
    return (
      <main>
        <Header currentPage="/detail" />
        <div className={styles.error_page}>
          <div className="H1">잘못된 접근입니다.</div>
        </div>
        <Footer isMobile={isMobile} />
      </main>
    );
  }

  const datas = require("/public/data/artist.json");
  const artistData = datas[index];

  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    const image = document.createElement("img");
    for (let i = 0; i < artistData.imageFileName.length; i++) {
      // image.addEventListener('load', () => {
      //   console.log(`loaded ${i}`)
      // });
      // image.addEventListener('error', () => {
      //   console.log(`error ${i}`)
      // });
      image.src = `/artwork/${artistData.name}/${artistData.imageFileName[i]}`;
    }
  }, []);

  return (
    <div>
      <Header
        currentPage="/detail"
        isFixed={scrollY > 100}
        isMobile={isMobile}
      />
      <div className={styles.main}>
        <ArtistName name={artistData.name} isMobile={isMobile} />
        <AbstractShort text={artistData.abstract_short} isMobile={isMobile} />
        <Space h={14} />
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            borderBottom: "1px solid #bfbfbf",
            alignItems: isMobile ? "center" : "normal",
          }}
          rel="preload"
        >
          <ExplanationBox
            explanation={artistData.explanation}
            abstract={artistData.abstract_long}
            isMobile={isMobile}
          />
          <Space h={14} />
          <ArtworkImageBox
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
            artistData={artistData}
            isMobile={isMobile}
          />
        </div>

        <Space h={14} />
        <ContactBox artistData={artistData} isMobile={isMobile} />
        <Space h={28} />
        <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
          <Link href="/artist/image">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: isMobile ? "14px" : "28px",
                paddingTop: "10px",
                paddingBottom: "10px",
                cursor: "pointer",
              }}
            >
              <img src="/icon/left.svg" />
              <Space w={isMobile ? 5 : 15} />
              <div className={"F"} style={{ lineHeight: "10px" }}>
                뒤로가기
              </div>
            </div>
          </Link>
        </div>
        <Space h={90} />
      </div>
      <Footer isMobile={isMobile} />
    </div>
  );
}

function ArtistName({ name, isMobile }: { name: string; isMobile: boolean }) {
  return (
    <div
      className={
        isMobile ? styles.artist_title_box_mobile : styles.artist_title_box
      }
    >
      <div className="A1">{name}</div>
    </div>
  );
}

function AbstractShort({
  text,
  isMobile,
}: {
  text: string;
  isMobile: boolean;
}) {
  return (
    <div
      className={
        isMobile ? styles.artist_title_box_mobile : styles.artist_title_box
      }
    >
      <div className="D1">{text}</div>
    </div>
  );
}

function ArtworkImageBox({
  imageIndex,
  setImageIndex,
  artistData,
  isMobile = false,
}: {
  imageIndex: number;
  setImageIndex: (val: number) => void;
  artistData: any;
  isMobile?: boolean;
}) {
  return (
    <div
      className={
        isMobile ? styles.artwork_image_box_mobile : styles.artwork_image_box
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          width: "100%",
        }}
      >
        <div
          onClick={() => {
            if (imageIndex == 0) {
              setImageIndex(artistData.imageFileName.length - 1);
            } else {
              setImageIndex(imageIndex - 1);
            }
          }}
          style={{ cursor: "pointer", display: "flex" }}
        >
          <img src="/icon/left.svg" />
        </div>

        <Space w={12} />
        <div className="F" style={{ textAlign: "center" }}>{`${
          imageIndex + 1
        } / ${artistData.imageFileName.length}`}</div>
        <Space w={12} />
        <div
          onClick={() => {
            if (imageIndex == artistData.imageFileName.length - 1) {
              setImageIndex(0);
            } else {
              setImageIndex(imageIndex + 1);
            }
          }}
          style={{ cursor: "pointer", display: "flex" }}
        >
          <img src="/icon/right.svg" />
        </div>
      </div>
      <Space h={14} />
      <img
        src={`/artwork/${artistData.name}/${artistData.imageFileName[imageIndex]}`}
        className={
          isMobile ? styles.artwork_image_mobile : styles.artwork_image
        }
        onError={({currentTarget}) => {
          currentTarget.onerror = null;
          currentTarget.src = "/icon/loading-fail.jpg"
        }}
      />
    </div>
  );
}

function ExplanationBox({
  explanation,
  abstract,
  isMobile,
}: {
  abstract: string;
  explanation: string;
  isMobile: boolean;
}) {
  return (
    <div
      style={{
        width: isMobile ? "100%" : "50vw",
        padding: isMobile ? "0px 14px" : "14px 28px",
      }}
    >
      <div className="D1" style={{ textAlign: "justify" }}>{`${abstract}`}</div>
      <Space h={14} />
      <div
        className="D2"
        style={{ textAlign: "justify" }}
      >{`${explanation}`}</div>
    </div>
  );
}

// function ArtworksBox({
//   imageCaptionList,
//   isMobile,
// }: {
//   imageCaptionList: string[];
//   isMobile: boolean;
// }) {
//   return (
//     <div className={isMobile ? styles.items_box_mobile : styles.items_box}>
//       <div className={styles.line} />
//       <Space h={15} />
//       <p className="FOOTER">artworks</p>
//       <Space h={30} />
//       {imageCaptionList.map((item, index) => {
//         return (
//           <p className="P2" id={`Artwork_${index}`}>{`${
//             index + 1
//           }. ${item}`}</p>
//         );
//       })}
//     </div>
//   );
// }

function ContactBox({
  artistData,
  isMobile,
}: {
  artistData: any;
  isMobile: boolean;
}) {
  return (
    <div className={isMobile ? styles.items_box_mobile : styles.items_box}>
      <div className="F">contact</div>
      <Space h={14} />
      {artistData.email.length > 0 ? (
        <div style={{ display: "flex" }}>
          <div className="D2" style={{ width: "80px" }}>{`이메일`}</div>
          <Space w={10} />
          <a href={`mailto:${artistData.email}`}>
            <div
              className="D2"
              style={{ textDecoration: "underline" }}
            >{`${artistData.email}`}</div>
          </a>
        </div>
      ) : (
        <></>
      )}

      {artistData.website.length > 0 ? (
        <div style={{ display: "flex" }}>
          <div className="D2" style={{ width: "80px" }}>{`홈페이지`}</div>
          <Space w={10} />
          <a href={`https://${artistData.website}`}>
            <div
              className="D2"
              style={{ textDecoration: "underline" }}
            >{`${artistData.website}`}</div>
          </a>
        </div>
      ) : (
        <></>
      )}
      {artistData.instagram.length > 0 ? (
        <div style={{ display: "flex" }}>
          <div className="D2" style={{ width: "80px" }}>{`SNS`}</div>
          <Space w={10} />
          <a href={`https://${artistData.instagram}`}>
            <div
              className="D2"
              style={{ textDecoration: "underline" }}
            >{`${artistData.instagram}`}</div>
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
