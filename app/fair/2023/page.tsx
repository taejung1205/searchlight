"use client";

import { Header, HomeHeader } from "@/components/header/header";
import styles from "./page.module.css";
import { CSSProperties, Suspense, useState } from "react";
import { getRandomInteger } from "@/app/utils/functions";
import {
  ButtonDefault,
  PricetagButton,
  PricetagClicked,
} from "@/components/button/button";
import { redirect, useRouter } from "next/navigation";
import { useWindowSize } from "@/app/utils/hooks";
import { MOBILE_WIDTH } from "@/app/utils/constants";
import Image from "next/image";
import { Space } from "@/components/space/space";

export default function Page() {
  const [pattern, setPattern] = useState<number>(getRandomInteger(3));
  const [currentPage, setCurrentPage] = useState<string>("Splash");
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < MOBILE_WIDTH;

  function selectPage(currentPage: string) {
    switch (currentPage) {
      case "Splash":
        return (
          <Suspense fallback={<></>}>
            <Splash onClick={() => setCurrentPage("Home")} />
          </Suspense>
        );
      case "Home":
        return (
          <Suspense fallback={<></>}>
            <Home
              pattern={pattern}
              setCurrentPage={setCurrentPage}
              isMobile={isMobile}
            />
          </Suspense>
        );
      case "About":
        return (
          <Suspense fallback={<></>}>
            <About pattern={pattern} isMobile={isMobile} />
          </Suspense>
        );

      case "Fair Info":
        return (
          <Suspense fallback={<></>}>
            <FairInfo pattern={pattern} isMobile={isMobile} />
          </Suspense>
        );

      case "Guide":
        return (
          <Suspense fallback={<></>}>
            <Guide pattern={pattern} isMobile={isMobile} />
          </Suspense>
        );

      case "Artists":
        return (
          <Suspense fallback={<></>}>
            <Artists pattern={pattern} isMobile={isMobile} />
          </Suspense>
        );

      default:
        return <></>;
    }
  }

  return (
    <div>
      {currentPage == "Splash" || currentPage == "Home" ? (
        <Header currentPage={"/fair/2023"} isMobile={isMobile} />
      ) : (
        <HomeHeader
          currentPage={currentPage}
          isMobile={isMobile}
          onCloseButtonClick={() => setCurrentPage("Home")}
        />
      )}

      {selectPage(currentPage)}
    </div>
  );
}

function Splash({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className={styles.splash_image_box}>
      <Image
        src="/artwork/윤지훈/윤지훈_Happy Dog Lamp.jpg"
        className={styles.splash_image_1}
        alt={"Loading..."}
        fill={true}
        priority
      />
      <Image
        src="/artwork/윤지훈/윤지훈_Homebody Lamp.png"
        className={styles.splash_image_2}
        alt={"Loading..."}
        fill={true}
      />
      <Image
        src="/artwork/윤지훈/윤지훈_Mulberry.jpg"
        className={styles.splash_image_3}
        alt={"Loading..."}
        fill={true}
        priority
      />
    </div>
  );
}

function Home({
  pattern,
  setCurrentPage,
  isMobile,
}: {
  pattern: number;
  setCurrentPage: (page: string) => void;
  isMobile: boolean;
}) {
  const router = useRouter();
  return (
    <div className={styles.home_box}>
      <Image
        src={
          isMobile
            ? "/logo/logotype_mobile_long.svg"
            : "/logo/logotype_web_long.svg"
        }
        alt="logo"
        className={isMobile ? styles.logo_mobile : styles.logo}
        width={isMobile ? 360 : 960}
        height={255}
        priority
      />
      <PricetagButton
        text={"Fair Info"}
        onClick={() => setCurrentPage("Fair Info")}
        style={FAIR_INFO_PRICETAG_STYLES[pattern]}
      />
      <PricetagButton
        text={"About"}
        onClick={() => setCurrentPage("About")}
        style={ABOUT_PRICETAG_STYLES[pattern]}
      />
      <PricetagButton
        text={"Artists"}
        onClick={() => setCurrentPage("Artists")}
        style={ARTISTS_PRICETAG_STYLES[pattern]}
      />
      <PricetagButton
        text={"Guide"}
        onClick={() => setCurrentPage("Guide")}
        style={GUIDE_PRICETAG_STYLES[pattern]}
      />
    </div>
  );
}

function About({ pattern, isMobile }: { pattern: number; isMobile: boolean }) {
  const router = useRouter();
  return (
    <div className={styles.home_box}>
      <PricetagClicked style={ABOUT_PRICETAG_STYLES[pattern]} />
      <div
        className={
          isMobile ? styles.page_body_box_mobile : styles.page_body_box
        }
      >
        <div className={styles.page_topic_title}>
          <div className={"A1"}>서문</div>
        </div>
        <div className={isMobile ? styles.page_body_mobile : styles.page_body}>
          <div className={"D2"} style={{ textAlign: "justify" }}>
            서치라이트 페어는 2030의 신진 작가와 신규 컬렉터를 중심으로한
            온오프라인 플랫폼을 오픈한다. 전통적인 전시 공간에서 작품을 비추는
            방식이 고정되어 있는 스포트라이트(spotlight)였다면, 이번 페어는 어떤
            것을 발견하기기 위해 끊임없이 움직이고 있는 유동하는 빛이다.
            희미하고 흐릿해지며 홀로 날고 있는 반딧불의 잔상을 쫓아가는 빛이다.
            이 빛은 작품을 비추고, 작가를 비추고, 컬렉터를 비추며, 작품을 사이에
            둔 두 가지 존재의 상호 작용에 주목한다.
            <br />
            <br />두 존재 앞에 놓인 서치라이트는 ‘예술품 구매’를 작가와 컬렉터
            사이에서 작은 스파크를 일으키는 과정으로 바라보고 있다. 컬렉팅은
            예술품에 대한 경험을 단순한 관람 이상으로 확장하는 또다른 방식인
            셈이다. 예술가에게도 이는 단순한 작품 판매의 의미를 넘어선다.‘미적
            경험’을 모색했던 존 듀이는 《경험으로서의 예술》에서 ‘창작자’와
            ‘감상자’의 존재를 더 커다란 완성을 향해 축적되는 하나의 과정으로
            묘사한다. 감상자를 컬렉터에 빚댄다면, 작품이 누군가에게 발견되는
            컬렉팅의 찰나는 예술가의 창작 행위 만큼이나 예술을 완성해나가는
            필연의 순간인 것이다. <br />
            <br /> “우리는 지각자와 감상자가 단지 완성된 형식에 있는 것을
            받아들인다는 사실을 생각하곤 하지만, 이렇듯 무언가를 받아들인다는
            것에는 창작자의 활동들에 비견되는 활동들이 포함되어 있음을 깨닫지
            못한다. 그러나 수용한다는 것은 피동적인 것은 아니다. 수용성 역시
            객관적 완성을 향해 축적되는 일련의 반응 행위들로 구성되어 있는
            하나의 과정이다.” <br />
            _존 듀이(John Dewey), ‘경험으로서의 예술’ 中<br />
            <br /> 이번 페어는 그 찰나의 순간에서 다양한 물질적 혹은 비물질적
            장치들을 실험하며 지속가능한 미술품 교류의 장을 모색하고자 한다.
            온오프라인에 펼쳐질 흔들리는 탐조등이 작가에게는 방향을 찾는 선명한
            불빛으로, 컬렉터에게는 작품을 발견하는 즐거운 반짝임으로 함께 하길
            기대한다.
          </div>
        </div>
      </div>
    </div>
  );
}

function FairInfo({
  pattern,
  isMobile,
}: {
  pattern: number;
  isMobile: boolean;
}) {
  const router = useRouter();
  return (
    <div className={styles.home_box}>
      <PricetagClicked style={FAIR_INFO_PRICETAG_STYLES[pattern]} />
      <div
        className={
          isMobile ? styles.page_body_box_mobile : styles.page_body_box
        }
      >
        <div className={styles.page_topic_title}>
          <div className={"A1"}>SEARCHLIGHT FAIR 2023</div>
        </div>
        <div className={isMobile ? styles.page_body_mobile : styles.page_body}>
          <div className={"D2"} style={{ textAlign: "justify" }}>
            <div
              style={{
                // maxWidth: "calc(100vw - 30px)",
                width: "372px",
                height: "550px",
                backgroundColor: "grey",
              }}
            />
            <Space h={14} />
            <div className="D2">
              일시: 2023.11.17.(금)~11.19.(일), 10:00-20:00
              <br />
              장소: 서울시 성동구 연무장17길 4 LES601
            </div>
            <Space h={25} />
            <ButtonDefault
              text={"티켓 구입 링크"}
              onClick={() => {
                console.log("hello");
              }}
            />
            <Space h={50} />
            <div className="A1" style={{ color: "#717171" }}>
              Credit.
            </div>
            <Space h={14} />
            <div className="D2" style={{ color: "#717171" }}>
              주최 및 주관: 로파서울
              <br />
              후원: 예술경영지원센터
              <br />
              협력: T.T.T.C 스튜디오
              <br />
              그래픽디자인: 이응셋
              <br />웹 디자인: 오가현
              <br />웹 개발: 김태정
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Guide({ pattern, isMobile }: { pattern: number; isMobile: boolean }) {
  const router = useRouter();
  return (
    <div className={styles.home_box}>
      <PricetagClicked style={ABOUT_PRICETAG_STYLES[pattern]} />
      <div
        className={
          isMobile ? styles.page_body_box_mobile : styles.page_body_box
        }
      >
        <div className={styles.page_topic_title}>
          <div className={"A1"}>관람 방법</div>
        </div>
        <div className={isMobile ? styles.page_body_mobile : styles.page_body}>
          <div className={"D2"} style={{ textAlign: "justify" }}>
            작품의 가격을 형성하는 요인, 그리고 작품을 구매하는 맥락에는 수많은
            사회적인 서사가 얽혀 있습니다. 하지만 대부분의 아트컬렉터들의 첫번째
            구매 작품은 ‘자신이 이 작업이 얼마나 마음에 들었는가’ 라는 아주
            지극히 개인적인 소비 의견이 더해집니다. ‘색감이 좋아서’, ‘우리 집에
            잘 어울릴 것 같아서’와 같은 작품을 구매하는 서사는, 우리가 소비품을
            구매하는 서사와 크게 다르지 않습니다. 서치라이트 페어에서 관람객은
            이 부분을 환기시켜줄만한 세 가지의 질문을 제공받음으로써 작품을
            관람하는 동안 ‘나는 어떤 작품을 구매할 것인가’에 대한 고민을
            경험합니다.
          </div>
          <Space h={28} />
          <div>
            <div style={{ display: "flex" }}>
              <div className="D2" style={{ width: 10 }}>
                1
              </div>
              <Space w={15} />
              <div
                className="D2"
                style={{ textAlign: "justify", width: "100%" }}
              >
                관람객은 입장 시 본격적인 관람에 앞서 페어에 관한 간략한 설명과
                함께 리셉션에 소지품을 맡긴 후 세 가지 질문이 담긴 박스 전개도와
                펜을 받게 됩니다. 
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="D2" style={{ width: 10 }}>
                2
              </div>
              <Space w={15} />
              <div
                className="D2"
                style={{ textAlign: "justify", width: "100%" }}
              >
                총 200여 점의 작품을 살펴보며, 질문에 상응하는 세 가지 작품을
                신중히 고른 후, 작품 번호를 기재합니다
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="D2" style={{ width: 10 }}>
                3
              </div>
              <Space w={15} />
              <div
                className="D2"
                style={{ textAlign: "justify", width: "100%" }}
              >
                관람 종료 후 작성한 카드를 리셉션에 제출합니다. 스태프는 선택한
                작품의 번호를 확인하고 그에 맞는 작가 한줄평 프라이스 택으로
                교환해드립니다. 
              </div>
            </div>
          </div>
          <Space h={28} />
          <div
            style={{
              backgroundColor: "grey",
              width: "100%",
              height: "240px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Artists({
  pattern,
  isMobile,
}: {
  pattern: number;
  isMobile: boolean;
}) {
  const router = useRouter();
  return (
    <div className={styles.home_box}>
      <PricetagClicked style={ABOUT_PRICETAG_STYLES[pattern]} />
      <div
        className={
          isMobile ? styles.page_body_box_mobile : styles.page_body_box
        }
      >
        <div className={styles.page_topic_title}>
          <div className={"A1"}>37 Artists, ?? Artworks.</div>
        </div>
        <div
          className={isMobile ? styles.page_body_mobile : styles.page_body}
        ></div>
      </div>
    </div>
  );
}

const FAIR_INFO_PRICETAG_STYLES: CSSProperties[] = [
  {
    transform: "rotate(-60deg)",
    left: "20vw",
    top: "32vh",
    position: "absolute",
  },
  {
    transform: "rotate(9deg)",
    right: "20vw",
    top: "25vh",
    position: "absolute",
  },
  {
    transform: "rotate(24deg)",
    left: "15vw",
    top: "50vh",
    position: "absolute",
  },
];

const GUIDE_PRICETAG_STYLES: CSSProperties[] = [
  {
    transform: "rotate(15deg)",
    left: "30vw",
    bottom: "10vh",
    position: "absolute",
  },
  {
    transform: "rotate(-30deg)",
    left: "35vw",
    bottom: "15vh",
    position: "absolute",
  },
  {
    transform: "rotate(-15deg)",
    right: "15vw",
    top: "45vh",
    position: "absolute",
  },
];

const ARTISTS_PRICETAG_STYLES: CSSProperties[] = [
  {
    transform: "rotate(-15deg)",
    right: "30vw",
    bottom: "30vh",
    position: "absolute",
  },
  {
    transform: "rotate(-24deg)",
    right: "40vw",
    bottom: "40vh",
    position: "absolute",
  },
  {
    transform: "rotate(6deg)",
    left: "40vw",
    bottom: "14vh",
    position: "absolute",
  },
];

const ABOUT_PRICETAG_STYLES: CSSProperties[] = [
  {
    transform: "rotate(30deg)",
    bottom: "40vh",
    right: "10vw",
    position: "absolute",
  },
  {
    transform: "rotate(36deg)",
    left: "16vw",
    bottom: "40vh",
    position: "absolute",
  },
  {
    transform: "rotate(-45deg)",
    left: "32vw",
    top: "30vh",
    position: "absolute",
  },
];
