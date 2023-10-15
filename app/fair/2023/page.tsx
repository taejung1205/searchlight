"use client";

import { Header } from "@/components/header/header";
import style from "./page.module.css";
import { CSSProperties, useState } from "react";
import { getRandomInteger } from "@/app/utils/functions";
import { PricetagButton } from "@/components/button/button";
import { redirect, useRouter } from "next/navigation";
import { useWindowSize } from "@/app/utils/hooks";
import { MOBILE_WIDTH } from "@/app/utils/constants";

export default function Page() {
  const [pattern, setPattern] = useState<number>(getRandomInteger(3));
  const [currentPage, setCurrentPage] = useState<string>('Splash');
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < MOBILE_WIDTH;

  function selectPage(currentPage: string){
    switch(currentPage){
      case('Splash'): 
        return <SplashImages onClick={() => setCurrentPage('Home')} />
      case('Home'):
        return <Home pattern={pattern} setCurrentPage={setCurrentPage} />
      default:
        return <></>
    }
  }

  return (
    <div>
      <Header currentPage={"/fair/2023"} isMobile={isMobile}/>
      {selectPage(currentPage)}
    </div>
  )
}

function SplashImages({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className={style.splash_image_box}>
      <img
        src="/artwork/윤지훈/윤지훈_Happy Dog Lamp.jpg"
        className={style.splash_image_1}
      />
      <img
        src="/artwork/윤지훈/윤지훈_Homebody Lamp.png"
        className={style.splash_image_2}
      />
      <img
        src="/artwork/윤지훈/윤지훈_Mulberry.jpg"
        className={style.splash_image_3}
      />
    </div>
  );
}

function Home({ pattern, setCurrentPage }: { pattern: number, setCurrentPage: (page: string) => void }) {
  const router = useRouter();
  return (
    <div className={style.home_box}>
      <img src="/logo/logotype_web_long.svg" className={style.logo} />
      <PricetagButton
        text={"Fair Info"}
        onClick={() => setCurrentPage('Fair Info')}
        style={FAIR_INFO_PRICETAG_STYLES[pattern]}
      />
      <PricetagButton
        text={"About"}
        onClick={() => setCurrentPage('About')}
        style={ABOUT_PRICETAG_STYLES[pattern]}
      />
      <PricetagButton
        text={"Artists"}
        onClick={() => setCurrentPage('Artists')}
        style={ARTISTS_PRICETAG_STYLES[pattern]}
      />
      <PricetagButton
        text={"Guide"}
        onClick={() => setCurrentPage('Guide')}
        style={GUIDE_PRICETAG_STYLES[pattern]}
      />
    </div>
  );
}

const FAIR_INFO_PRICETAG_STYLES: CSSProperties[] = [
  { transform: "rotate(-60deg)", left: "20vw", top: "30vh", position: "absolute" },
  { transform: "rotate(9deg)", right: "20vw", top: "20vh", position: "absolute" },
  { transform: "rotate(24deg)", left: "15vw", top: "50vh", position: "absolute" },
];

const GUIDE_PRICETAG_STYLES: CSSProperties[] = [
  { transform: "rotate(15deg)", left: "30vw", bottom: "10vh", position: "absolute" },
  { transform: "rotate(-30deg)", left: "35vw", bottom: "15vh", position: "absolute" },
  { transform: "rotate(-15deg)", right: "15vw", top: "45vh", position: "absolute" },
];

const ARTISTS_PRICETAG_STYLES: CSSProperties[] = [
  { transform: "rotate(-15deg)", right: "30vw", bottom: "30vh", position: "absolute" },
  { transform: "rotate(-24deg)", right: "40vw", bottom: "40vh", position: "absolute" },
  { transform: "rotate(6deg)", left: "40vw", bottom: "14vh", position: "absolute" },
];

const ABOUT_PRICETAG_STYLES: CSSProperties[] = [
  { transform: "rotate(30deg)", bottom: "40vh", right: "10vw", position: "absolute" },
  { transform: "rotate(36deg)", left: "16vw", bottom: "40vh", position: "absolute" },
  { transform: "rotate(-45deg)", left: "32vw", top: "30vh", position: "absolute" },
];