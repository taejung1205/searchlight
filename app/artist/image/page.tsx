"use client";

import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { useSearchParams } from "next/navigation";
import style from "./page.module.css";
import { useEffect, useState } from "react";
import { Space } from "@/components/space/space";
import { useScrollY, useWindowSize } from "../../utils/hooks";
import Link from "next/link";
import { MOBILE_WIDTH } from "../../utils/constants";
import { getShuffledArray } from "@/app/utils/functions";
import Image from "next/image";

export default function Page() {
  const scrollY = useScrollY();
  const searchParams = useSearchParams();
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < MOBILE_WIDTH;

  const [isBig, setIsBig] = useState<boolean>(true);
  const [dataArray, setDataArray] = useState<any[]>([]);
  const [shownImageCount, setShownImageCount] = useState<number>(8);
  const [loadedImageCount, setLoadedImageCount] = useState<number>(0);
  const [isAllImageLoaded, setIsAllImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const datas = require("/public/data/artist.json");
    setDataArray(getShuffledArray(datas));
    if (isMobile) {
      setIsBig(false);
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      if (loadedImageCount >= shownImageCount || loadedImageCount >= dataArray.length) {
        setIsAllImageLoaded(true);
      } else {
        setIsAllImageLoaded(false);
      }
    } else {
      if (loadedImageCount >= dataArray.length) {
        setIsAllImageLoaded(true);
      } else {
        setIsAllImageLoaded(false);
      }
    }
  }, [loadedImageCount]);

  function onImageLoad() {
    setLoadedImageCount((prev) => prev + 1);
  }

  return (
    <div>
      <Header
        currentPage="/artist/image"
        isFixed={scrollY > 100}
        isMobile={isMobile}
      />
      <div className={style.main}>
        <Subheader isMobile={isMobile} isBig={isBig} setIsBig={setIsBig} />
        <Space h={1} />
        <ImageGrid
          isMobile={isMobile}
          isBig={isBig}
          screenWidth={windowSize.width}
          dataArray={dataArray}
          shownImageCount={shownImageCount}
          setShownImageCount={setShownImageCount}
          isAllImageLoaded={isAllImageLoaded}
          onImageLoad={onImageLoad}
        />
        <Space h={120} />
      </div>
      <Footer isMobile={isMobile} />
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
      <div className="D2">35 ARTISTS</div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={
            isBig ? "/icon/bigger_selected.svg" : "/icon/bigger_unselected.svg"
          }
          style={{ height: "18px", width: "18px", cursor: "pointer" }}
          onClick={() => setIsBig(true)}
        />
        <Space w={15} />
        <img
          src={
            isBig
              ? "/icon/smaller_unselected.svg"
              : "/icon/smaller_selected.svg"
          }
          style={{ height: "18px", width: "18px", cursor: "pointer" }}
          onClick={() => setIsBig(false)}
        />
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
  onImageLoad,
  isAllImageLoaded,
}: {
  isMobile: boolean;
  isBig: boolean;
  screenWidth: number;
  dataArray: any[];
  shownImageCount: number;
  setShownImageCount: (val: number) => void;
  onImageLoad: () => void;
  isAllImageLoaded: boolean;
}) {
  const divider = isMobile ? (isBig ? 1 : 2) : isBig ? 3 : 6;
  const array = isMobile ? dataArray.slice(0, shownImageCount) : dataArray;
  return (
    <>
      <div
        className={
          isMobile
            ? isBig
              ? style.image_grid_big_mobile
              : style.image_grid_small_mobile
            : isBig
            ? style.image_grid_big
            : style.image_grid_small
        }
      >
        {array.map((item, index) => {
          return (
            <Link
              href={`/detail?index=${item.index}`}
              id={`ImageItem-${index}`}
            >
              <div className={style.artwork_image_box}>
                <Image
                  src={`/artwork/${item.name}/${item.imageFileName[0]}`}
                  className={style.artwork_image}
                  alt={"X"}
                  placeholder="blur"
                  blurDataURL="/icon/close.svg"
                  width={screenWidth / divider}
                  height={screenWidth / divider}
                  onLoad={onImageLoad}
                />
              </div>
            </Link>
          );
        })}
        {isAllImageLoaded ? (
          <></>
        ) : (
          <div className={style.loading_overlay} >
            <img src="/icon/circle-loader.gif" className={style.loading_overlay_image} rel="preload"/>
          </div>
        )}
      </div>
      {isMobile ? (
        <>
          <div style={{ width: "100%" }} />
          <Space h={30} />
          <div className="F">더보기</div>
          <Space h={10} />
          <img
            src="/icon/down.svg"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShownImageCount(shownImageCount + 8);
            }}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
