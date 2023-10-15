"use client";

import { Header } from "@/components/header/header";
import style from "./page.module.css";
import { useState } from "react";

export default function Page() {
  const [isSplash, setIsSplash] = useState<boolean>(true);
  return (
    <div>
      <Header currentPage={"/fair/2023"} />
      {isSplash ? <SplashImages onClick={() => setIsSplash(false)}/> : <div></div>}
    </div>
  );
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
