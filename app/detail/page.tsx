"use client";

import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { useSearchParams } from "next/navigation";
import style from "./page.module.css";
import { useState } from "react";
import { Space } from "@/components/space/space";
import { NonButtonTag } from "@/components/tag/tag";
import { ButtonDefault } from "@/components/button/button";
import { useScrollY, useWindowSize } from "../utils/hooks";
import Link from "next/link";
import { MOBILE_WIDTH } from "../utils/constants";

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
        <div className={style.error_page}>
          <p className="H1">잘못된 접근입니다.</p>
        </div>
        <Footer />
      </main>
    );
  }

  const datas = require("/public/data/artist.json");
  const artistData = datas[index];

  const [imageIndex, setImageIndex] = useState<number>(0);

  return (
    <div>
      <Header
        currentPage="/detail"
        isFixed={scrollY > 100}
        isMobile={isMobile}
      />
      <div className={style.main}>
        <ArtistName name={artistData.name} />
        <Space h={30} />
        <ArtworkImageBox
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          artistData={artistData}
          isMobile={isMobile}
        />
        <Space h={30} />
        <IntroductionBox
          abstract={artistData.abstract_short}
          intro={artistData.intro}
          screenWidth={windowSize.width}
        />
        <Space h={30} />
        <ArtworksBox
          imageCaptionList={artistData.artworks}
          isMobile={isMobile}
        />
        <Space h={30} />
        <ContactBox artistData={artistData} isMobile={isMobile} />
        <Space h={120} />
      </div>
      <Footer />
    </div>
  );
}

function ArtistName({ name }: { name: string }) {
  return (
    <div className={style.artist_name_box}>
      <p className="H1">{name}</p>
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
        isMobile ? style.artwork_image_box_mobile : style.artwrok_image_box
      }
    >
      <img
        src={`/artwork/${artistData.name}/${artistData.imageFileName[imageIndex]}`}
        className={isMobile ? style.artwork_image_mobile : style.artwork_image}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/icon/left.svg"
          onClick={() => {
            if (imageIndex == 0) {
              setImageIndex(artistData.imageFileName.length - 1);
            } else {
              setImageIndex(imageIndex - 1);
            }
          }}
          style={{ cursor: "pointer" }}
        />
        <Space w={30} />
        <p className="FOOTER" style={{ textAlign: "center" }}>{`${
          imageIndex + 1
        } / ${artistData.imageFileName.length}`}</p>
        <Space w={30} />
        <img
          src="/icon/right.svg"
          onClick={() => {
            if (imageIndex == artistData.imageFileName.length - 1) {
              setImageIndex(0);
            } else {
              setImageIndex(imageIndex + 1);
            }
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

function IntroductionBox({
  abstract,
  intro,
  screenWidth,
}: {
  abstract: string;
  intro: string;
  screenWidth: number;
}) {
  return (
    <div
      style={{
        width: screenWidth > MOBILE_WIDTH ? "710px" : `${screenWidth - 60}px`,
        textAlign: "center",
      }}
    >
      <p className="P1">{`"${abstract}"`}</p>
      <Space h={30} />
      <p className="P2">{intro}</p>
    </div>
  );
}

function ArtworksBox({
  imageCaptionList,
  isMobile,
}: {
  imageCaptionList: string[];
  isMobile: boolean;
}) {
  return (
    <div className={isMobile ? style.items_box_mobile : style.items_box}>
      <div className={style.line} />
      <Space h={15} />
      <p className="FOOTER">artworks</p>
      <Space h={30} />
      {imageCaptionList.map((item, index) => {
        return (
          <p className="P2" id={`Artwork_${index}`}>{`${
            index + 1
          }. ${item}`}</p>
        );
      })}
    </div>
  );
}

function ContactBox({
  artistData,
  isMobile,
}: {
  artistData: any;
  isMobile: boolean;
}) {
  return (
    <div className={isMobile ? style.items_box_mobile : style.items_box}>
      <div className={style.line} />
      <Space h={15} />
      <p className="FOOTER">contact</p>
      <Space h={30} />
      <div style={{ display: "flex" }}>
        <p className="P2">{`이메일:`}</p>
        <Space w={10} />
        <a href={`mailto:${artistData.email}`}>
          <p
            className="P2"
            style={{ textDecoration: "underline" }}
          >{`${artistData.email}`}</p>
        </a>
      </div>

      {artistData.website.length > 0 ? (
        <div style={{ display: "flex" }}>
          <p className="P2">{`포트폴리오:`}</p>
          <Space w={10} />
          <a href={`https://${artistData.website}`}>
            <p
              className="P2"
              style={{ textDecoration: "underline" }}
            >{`${artistData.website}`}</p>
          </a>
        </div>
      ) : (
        <></>
      )}
      <div style={{ display: "flex" }}>
        <p className="P2">{`SNS:`}</p>
        <Space w={10} />
        <a href={`https://${artistData.instagram}`}>
          <p
            className="P2"
            style={{ textDecoration: "underline" }}
          >{`${artistData.instagram}`}</p>
        </a>
      </div>
      <Space h={30} />
      <ButtonDefault
        text="작가 공유하기"
        onClick={
          /** TODO */ () => {
            console.log("hello");
          }
        }
      />
    </div>
  );
}

