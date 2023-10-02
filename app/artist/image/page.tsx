"use client";

import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { useSearchParams } from "next/navigation";
import style from "./page.module.css";
import { useEffect, useState } from "react";
import { Space } from "@/components/space/space";
import { NonButtonTag } from "@/components/tag/tag";
import { ButtonImportant } from "@/components/button/button";
import { useScrollY, useWindowSize } from "../../utils/hooks";
import Link from "next/link";
import { MOBILE_WIDTH } from "../../utils/constants";
import { getShuffledArray } from "@/app/utils/functions";

export default function Page() {
  const scrollY = useScrollY();
  const searchParams = useSearchParams();
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < MOBILE_WIDTH;

  const [isBig, setIsBig] = useState<boolean>(true);
  const [dataArray, setDataArray] = useState<any[]>([]);
  const [shownImageCount, setShownImageCount] = useState<number>(8);

  useEffect(() => {
    const datas = require("/public/data/artist.json");
    setDataArray(getShuffledArray(datas));
    if (isMobile) {
      setIsBig(false);
    }
  }, []);

  return (
    <div>
      <Header
        currentPage="artist_image"
        isFixed={scrollY > 100}
        isMobile={isMobile}
      />
      <div className={style.main}>
        <Subheader isMobile={isMobile} isBig={isBig} setIsBig={setIsBig} />
        <ImageGrid
          isMobile={isMobile}
          isBig={isBig}
          screenWidth={windowSize.width}
          dataArray={dataArray}
          shownImageCount={shownImageCount}
          setShownImageCount={setShownImageCount}
        />
        <Space h={120} />
      </div>
      <Footer />
    </div>
  );
}

function Subheader({
  isMobile,
  isBig,
  setIsBig,
}: {
  isMobile: boolean;
  isBig: boolean;
  setIsBig: (val: boolean) => void;
}) {
  return (
    <div
      className={isMobile ? style.subheader_box_mobile : style.subheader_box}
    >
      <Link href="/artist/tag">
        <p className="P1">ARTIST / 이미지로 보기</p>
      </Link>

      <div
        style={{ display: "flex", cursor: "pointer", alignItems: "center" }}
        onClick={() => setIsBig(!isBig)}
      >
        <img
          src={isBig ? "/icon/smaller.svg" : "/icon/bigger.svg"}
          style={{ height: "30px", width: "30px" }}
        />
        {isMobile ? (
          <></>
        ) : (
          <div style={{ display: "flex" }}>
            <Space w={10} />
            <p className="P1">{isBig ? "작게 보기" : "크게 보기"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ImageGrid({
  isMobile,
  isBig,
  screenWidth,
  dataArray,
  shownImageCount,
  setShownImageCount,
}: {
  isMobile: boolean;
  isBig: boolean;
  screenWidth: number;
  dataArray: any[];
  shownImageCount: number;
  setShownImageCount: (val: number) => void;
}) {
  const divider = isMobile ? (isBig ? 1 : 2) : isBig ? 3 : 6;
  const array = isMobile ? dataArray.slice(0, shownImageCount) : dataArray;
  return (
    <div className={style.image_grid}>
      {array.map((item) => {
        return (
          <Link href={`/detail?index=${item.index}`}>
            <img
              src={`/artwork/${item.name}/${item.imageFileName[0]}`}
              style={{
                width: (screenWidth - 40) / divider,
                height: (screenWidth - 40) / divider,
              }}
              className={style.artwork_image}
            />
          </Link>
        );
      })}
      {isMobile ? (
        <>
          <div style={{ width: "100%" }} />
          <Space h={30} />
          <p className="FOOTER">more</p>
          <Space h={30} />
          <img
            src="/icon/unfold.svg"
            style={{ cursor: "pointer", width: "30px", height: "30px" }}
            onClick={() => {
              setShownImageCount(shownImageCount + 8);
            }}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
