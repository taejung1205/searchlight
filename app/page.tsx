"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { Countbutton, GoToStoreButton } from "@/components/button/button";
import { useScrollY, useWindowSize } from "./utils/hooks";
import { Footer } from "@/components/footer/footer";
import Link from "next/link";
import { MOBILE_WIDTH } from "./utils/constants";
import { Space } from "@/components/space/space";
import {
  SearchlightEffectBox,
  SearchlightEffectLight,
} from "@/components/effect/effect";
import { redirect, useRouter } from "next/navigation";

export default function Page() {

  const router = useRouter();
  
  useEffect(() => {
    router.replace('/fair/2023');
  }, [router])

  // const [prevScrollY, setPrevScrollY] = useState(0);
  // const scrollY = useScrollY();
  // const windowSize = useWindowSize();
  // const landingRef = useRef<null | HTMLDivElement>(null);
  // const explanationRef = useRef<null | HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log(prevScrollY, scrollY);
  // }, []);

  // useEffect(() => {
  //   if (prevScrollY == 0 && scrollY > 0 && scrollY < 500) {
  //     scrollDown();
  //   }
  //   setPrevScrollY(scrollY);
  // }, [scrollY]);

  //  TODO: 현재는 완벽하게 작동하지 않음
  // function scrollUp() {
  //   console.log("up");
  //   window.scroll({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }

  // function scrollDown() {
  //   console.log("down");
  //   window.scroll({
  //     top: explanationRef.current?.offsetTop,
  //     behavior: "smooth",
  //   });
  // }

  // function gatherSearchlight() {
  //   for (let i = 1; i < 4; i++) {
  //     const element = window.document.getElementById(`searchlight_${i}`);
  //     if (element) {
  //       element.animate(
  //         [
  //           {},
  //           {
  //             backgroundColor: "#e8f45280",
  //             transform: "translate(0, 0)",
  //           },
  //         ],
  //         {
  //           duration: 1000,
  //           easing: "ease-out",
  //           fill: "forwards",
  //         }
  //       );
  //     }
  //   }
  //   const element = window.document.getElementById(`searchlight_text`);
  //   if (element) {
  //     element.animate(
  //       [
  //         {},
  //         {
  //           opacity: 0,
  //         },
  //       ],
  //       {
  //         delay: 500,
  //         duration: 500,
  //         easing: "ease-out",
  //         fill: "forwards",
  //       }
  //     );
  //   }
  // }

  // if (windowSize.width > MOBILE_WIDTH) {
  //   return (
  //     <main className={styles.main}>
  //       <div className={styles.landing_box} ref={landingRef}>
  //         <img src="/logo/logotype_web_long.svg" className={styles.logo} />
  //         <SearchlightEffectBox onClick={gatherSearchlight}>
  //           <SearchlightEffectLight animType="1" id="searchlight_1" />
  //           <SearchlightEffectLight animType="2" id="searchlight_2" />
  //           <SearchlightEffectLight animType="3" id="searchlight_3" />
  //           <p className="W1" id="searchlight_text">
  //             서치라이트를 켜보세요!
  //             <br />
  //             (click!)
  //           </p>
  //         </SearchlightEffectBox>
  //         <Countbutton count={0} /> {/* TODO */}
  //       </div>
  //       <div className={styles.explanation_box} ref={explanationRef}>
  //         <img
  //           src="/logo/logotype_web_short.svg"
  //           className={styles.small_logo}
  //         />
  //         <div className={styles.explanation_item}>
  //           <div className={styles.explanation_title}>
  //             <p className="W1">
  //               SEARCHLIGHT 2023
  //               <br />
  //               서치라이트 2023
  //             </p>
  //           </div>
  //           <div className={styles.explanation_body}>
  //             <p className="W2">
  //               일시: 2023.11.00.-11.00.
  //               <br />
  //               (총 3일간) 00:00~00:00 장소: LES601 성수(서울특별시 성동구
  //               성수동2가 275-21)
  //             </p>
  //           </div>
  //         </div>
  //         <div className={styles.explanation_item}>
  //           <div className={styles.explanation_title}>
  //             <p className="W1">
  //               ABOUT US
  //               <br />
  //               소개
  //             </p>
  //           </div>
  //           <div className={styles.explanation_body}>
  //             <p className="W2">
  //               서치라이트 페어는 자신을 전업작가로 명명하기에 모호한, 작품
  //               활동을 지속하는 데 현실적인 어려움을 겪는 작가들의 작업을
  //               소개합니다.
  //               <br />
  //               <br />
  //               일반적으로 작품 구매의 경로란 크게 갤러리 혹은 관계자 소개를
  //               통한 구매와 작가의 개인 채널을 통한 구매 두 가지로 인식됩니다.
  //               문제는 두 경로 사이의 간극이 크다는 것과 갤러리와 작가 개인을
  //               통하지 않는 구매 창구는 상대적으로 예술품으로 인식되는 데
  //               어려움이 있다는 점입니다. 이런 상황 속에서 작가는 작품 활동의
  //               방향을 정해나갈 때 상업성과 예술성 중 어느 쪽을 추구할 것인가에
  //               대한 끝없는 고민을 하게 됩니다.
  //               <br />
  //               <br />
  //               이에 서치라이트 페어는 특정 집단 혹은 업계에 의해 자격조건을
  //               부여받는 방식이 아닌, 작가와 소비자가 일 대 일로 거래할 수
  //               있으면서 작가로서의 정체성을 공고히 하는 공식적인 프레젠테이션의
  //               자리이자 페어 주최측 아래 거래의 신뢰도와 가이드를 제공받을 수
  //               있는 중간 다리 역할을 수행하고자 합니다.
  //               <br />
  //               <br />
  //               페어의 타이틀인 “서치라이트(탐조등)”는 크게 두 가지 의미를
  //               가집니다. 작가에게는 작품활동의 방향성을 찾기 위해 길을 밝히는
  //               탐조등, 예술 시장의 관계자나 작품 구매자, 아티스트의 팬들에게는
  //               몰랐던 작가를 발굴하고 그를 조명하는 탐조등을 의미합니다.
  //               서치라이트 페어는 이들이 모두 예술시장 활성화에 기여하는
  //               커뮤니티의 일원이라는 점을 페어를 통해 알리고 지속가능한
  //               커뮤니티로 일구어 나가고자 합니다.
  //             </p>
  //             <div style={{ height: "80px" }} />
  //             <Link href="/store">
  //               <GoToStoreButton />
  //             </Link>
  //           </div>
  //         </div>
  //         <div className={styles.explanation_item}>
  //           <div className={styles.explanation_title}>
  //             <p className="W1">
  //               PROGRAMS
  //               <br />
  //               페어 프로그램
  //             </p>
  //           </div>
  //           <div className={styles.explanation_body}>
  //             <div className={styles.body_with_bars}>
  //               <div className={styles.bar} />
  //               <p className="W2">
  //                 1. 사라지는 미대생들. 디자이너와 기획자들은 그들을 위해 무엇을
  //                 할 수 있을까?
  //                 <br />
  //                 by. 김영지 따바프레스(주) 대표 | 00/00 00:00~00:00
  //               </p>
  //               <div className={styles.bar} />
  //               <p className="W2">
  //                 1. 사라지는 미대생들. 디자이너와 기획자들은 그들을 위해 무엇을
  //                 할 수 있을까?
  //                 <br />
  //                 by. 김영지 따바프레스(주) 대표 | 00/00 00:00~00:00
  //               </p>
  //               <div className={styles.bar} />
  //               <p className="W2">
  //                 1. 사라지는 미대생들. 디자이너와 기획자들은 그들을 위해 무엇을
  //                 할 수 있을까?
  //                 <br />
  //                 by. 김영지 따바프레스(주) 대표 | 00/00 00:00~00:00
  //               </p>
  //               <div className={styles.bar} />
  //               <p className="W2">
  //                 1. 사라지는 미대생들. 디자이너와 기획자들은 그들을 위해 무엇을
  //                 할 수 있을까?
  //                 <br />
  //                 by. 김영지 따바프레스(주) 대표 | 00/00 00:00~00:00
  //               </p>
  //               <div className={styles.bar} />
  //             </div>
  //           </div>
  //         </div>
  //         <div className={styles.explanation_item}>
  //           <div className={styles.explanation_title}>
  //             <p className="W1">
  //               WITH US
  //               <br />
  //               함께한 사람들
  //             </p>
  //           </div>
  //           <div className={styles.explanation_body}>
  //             <div className={styles.body_with_bars}>
  //               <div style={{ display: "flex" }}>
  //                 <div className={styles.withus_title}>
  //                   <div className={styles.bar} />
  //                   <p className="W2">주최</p>
  //                 </div>
  //                 <div style={{ width: "100% " }}>
  //                   <div className={styles.bar} />
  //                   <p className="W2">LOFA SEOUL</p>
  //                 </div>
  //               </div>
  //               <div style={{ display: "flex" }}>
  //                 <div className={styles.withus_title}>
  //                   <div className={styles.bar} />
  //                   <p className="W2">참여 작가</p>
  //                 </div>
  //                 <div style={{ width: "100% " }}>
  //                   <div className={styles.bar} />
  //                   <p className="W2">바로가기 (총 00인)</p>
  //                 </div>
  //               </div>
  //               <div style={{ display: "flex" }}>
  //                 <div className={styles.withus_title}>
  //                   <div className={styles.bar} />
  //                   <p className="W2">스폰서</p>
  //                 </div>
  //                 <div style={{ width: "100% " }}>
  //                   <div className={styles.bar} />
  //                   <p className="W2">예술경영지원센터</p>
  //                 </div>
  //               </div>
  //               <div style={{ display: "flex" }}>
  //                 <div className={styles.withus_title}>
  //                   <div className={styles.bar} />
  //                   <p className="W2">만든 사람들</p>
  //                 </div>
  //                 <div style={{ width: "100% " }}>
  //                   <div className={styles.bar} />
  //                   <p className="W2">
  //                     TABAC PRESS{" "}
  //                     <span style={{ color: "#717171" }}>
  //                       / 기획, 운영, 홍보, 공간
  //                     </span>
  //                     <br />
  //                     이응셋{" "}
  //                     <span style={{ color: "#717171" }}>/ 비주얼 디자인</span>
  //                     <br />
  //                     오가현, 김태정{" "}
  //                     <span style={{ color: "#717171" }}>
  //                       / 웹 디자인 및 개발
  //                     </span>
  //                     <br />
  //                     T.T.T.C. STUDIO{" "}
  //                     <span style={{ color: "#717171" }}>
  //                       / 텍스트, 공간 기획
  //                     </span>
  //                   </p>
  //                 </div>
  //               </div>
  //               <div style={{ display: "flex" }}>
  //                 <div className={styles.withus_title}>
  //                   <div className={styles.bar} />
  //                 </div>
  //                 <div style={{ width: "100% " }}>
  //                   <div className={styles.bar} />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <Footer />
  //     </main>
  //   );
  // } else {
  //   return (
  //     <main className={styles.main}>
  //       <div className={styles.landing_box} ref={landingRef}>
  //         <img
  //           src="/logo/logotype_mobile_long.svg"
  //           className={styles.logo_mobile}
  //         />
  //         <SearchlightEffectBox onClick={gatherSearchlight} isMobile>
  //           <SearchlightEffectLight animType="1" id="searchlight_1" isMobile />
  //           <SearchlightEffectLight animType="2" id="searchlight_2" isMobile />
  //           <p className="M1" id="searchlight_text">
  //             서치라이트를 켜보세요! <br /> (click!)
  //           </p>
  //         </SearchlightEffectBox>
  //         <div style={{ position: "absolute", bottom: "40px" }}>
  //           <Countbutton count={0} isMobile />
  //         </div>
  //         {/* TODO */}
  //       </div>
  //       <div className={styles.explanation_box_mobile} ref={explanationRef}>
  //         <img
  //           src="/logo/logotype_mobile_short.svg"
  //           className={styles.small_logo_mobile}
  //         />
  //         <div className={styles.explanation_item_mobile}>
  //           <p className="M1">
  //             SEARCHLIGHT 2023
  //             <br />
  //             서치라이트 2023
  //           </p>
  //           <p className="M2">
  //             일시: 2023.11.00.-11.00. (총 3일간)
  //             <br />
  //             00:00~00:00 장소: LES601 성수(서울특별시 성동구 성수동2가 275-21)
  //           </p>
  //         </div>
  //         <div className={styles.explanation_item_mobile}>
  //           <p className="M1">
  //             ABOUT US
  //             <br />
  //             소개
  //           </p>
  //           <p className="M2">
  //             서치라이트 페어는 자신을 전업작가로 명명하기에 모호한, 작품 활동을
  //             지속하는 데 현실적인 어려움을 겪는 작가들의 작업을 소개합니다.
  //             <br />
  //             <br />
  //             일반적으로 작품 구매의 경로란 크게 갤러리 혹은 관계자 소개를 통한
  //             구매와 작가의 개인 채널을 통한 구매 두 가지로 인식됩니다. 문제는
  //             두 경로 사이의 간극이 크다는 것과 갤러리와 작가 개인을 통하지 않는
  //             구매 창구는 상대적으로 예술품으로 인식되는 데 어려움이 있다는
  //             점입니다. 이런 상황 속에서 작가는 작품 활동의 방향을 정해나갈 때
  //             상업성과 예술성 중 어느 쪽을 추구할 것인가에 대한 끝없는 고민을
  //             하게 됩니다.
  //             <br />
  //             <br />
  //             이에 서치라이트 페어는 특정 집단 혹은 업계에 의해 자격조건을
  //             부여받는 방식이 아닌, 작가와 소비자가 일 대 일로 거래할 수
  //             있으면서 작가로서의 정체성을 공고히 하는 공식적인 프레젠테이션의
  //             자리이자 페어 주최측 아래 거래의 신뢰도와 가이드를 제공받을 수
  //             있는 중간 다리 역할을 수행하고자 합니다.
  //             <br />
  //             <br />
  //             페어의 타이틀인 “서치라이트(탐조등)”는 크게 두 가지 의미를
  //             가집니다. 작가에게는 작품활동의 방향성을 찾기 위해 길을 밝히는
  //             탐조등, 예술 시장의 관계자나 작품 구매자, 아티스트의 팬들에게는
  //             몰랐던 작가를 발굴하고 그를 조명하는 탐조등을 의미합니다.
  //             서치라이트 페어는 이들이 모두 예술시장 활성화에 기여하는
  //             커뮤니티의 일원이라는 점을 페어를 통해 알리고 지속가능한
  //             커뮤니티로 일구어 나가고자 합니다.
  //           </p>
  //           <Space h={30} />
  //           <Link href="/store">
  //             <GoToStoreButton isMobile />
  //           </Link>
  //         </div>
  //         <div className={styles.explanation_item_mobile}>
  //           <p className="M1">
  //             PROGRAMS
  //             <br />
  //             페어 프로그램
  //           </p>
  //           <Space h={10} />
  //           <div className={styles.body_with_bars}>
  //             <div className={styles.bar} />
  //             <p className="M2">
  //               1. 사라지는 미대생들. 디자이너와 기획자들은 그들을 위해 무엇을
  //               할 수 있을까?
  //               <br />
  //               by. 김영지 따바프레스(주) 대표 | 00/00 00:00~00:00
  //             </p>
  //             <div className={styles.bar} />
  //             <p className="M2">
  //               1. 사라지는 미대생들. 디자이너와 기획자들은 그들을 위해 무엇을
  //               할 수 있을까?
  //               <br />
  //               by. 김영지 따바프레스(주) 대표 | 00/00 00:00~00:00
  //             </p>
  //             <div className={styles.bar} />
  //             <p className="M2">
  //               1. 사라지는 미대생들. 디자이너와 기획자들은 그들을 위해 무엇을
  //               할 수 있을까?
  //               <br />
  //               by. 김영지 따바프레스(주) 대표 | 00/00 00:00~00:00
  //             </p>
  //             <div className={styles.bar} />
  //             <p className="M2">
  //               1. 사라지는 미대생들. 디자이너와 기획자들은 그들을 위해 무엇을
  //               할 수 있을까?
  //               <br />
  //               by. 김영지 따바프레스(주) 대표 | 00/00 00:00~00:00
  //             </p>
  //             <div className={styles.bar} />
  //           </div>
  //         </div>
  //         <div className={styles.explanation_item_mobile}>
  //           <p className="M1">
  //             WITH US
  //             <br />
  //             함께한 사람들
  //           </p>
  //           <Space h={10} />
  //           <div className={styles.body_with_bars}>
  //             <div style={{ display: "flex" }}>
  //               <div className={styles.withus_title}>
  //                 <div className={styles.bar} />
  //                 <p className="M2">주최</p>
  //               </div>
  //               <div style={{ width: "100% " }}>
  //                 <div className={styles.bar} />
  //                 <p className="M2">LOFA SEOUL</p>
  //               </div>
  //             </div>
  //             <div style={{ display: "flex" }}>
  //               <div className={styles.withus_title}>
  //                 <div className={styles.bar} />
  //                 <p className="M2">참여 작가</p>
  //               </div>
  //               <div style={{ width: "100% " }}>
  //                 <div className={styles.bar} />
  //                 <p className="M2">바로가기 (총 00인)</p>
  //               </div>
  //             </div>
  //             <div style={{ display: "flex" }}>
  //               <div className={styles.withus_title}>
  //                 <div className={styles.bar} />
  //                 <p className="M2">스폰서</p>
  //               </div>
  //               <div style={{ width: "100% " }}>
  //                 <div className={styles.bar} />
  //                 <p className="M2">예술경영지원센터</p>
  //               </div>
  //             </div>
  //             <div style={{ display: "flex" }}>
  //               <div className={styles.withus_title}>
  //                 <div className={styles.bar} />
  //                 <p className="M2">만든 사람들</p>
  //               </div>
  //               <div style={{ width: "100% " }}>
  //                 <div className={styles.bar} />
  //                 <p className="M2">
  //                   TABAC PRESS{" "}
  //                   <span style={{ color: "#717171" }}>
  //                     / 기획, 운영, 홍보, 공간
  //                   </span>
  //                   <br />
  //                   이응셋{" "}
  //                   <span style={{ color: "#717171" }}>/ 비주얼 디자인</span>
  //                   <br />
  //                   오가현, 김태정{" "}
  //                   <span style={{ color: "#717171" }}>
  //                     / 웹 디자인 및 개발
  //                   </span>
  //                   <br />
  //                   T.T.T.C. STUDIO{" "}
  //                   <span style={{ color: "#717171" }}>
  //                     / 텍스트, 공간 기획
  //                   </span>
  //                 </p>
  //               </div>
  //             </div>
  //             <div style={{ display: "flex" }}>
  //               <div className={styles.withus_title}>
  //                 <div className={styles.bar} />
  //               </div>
  //               <div style={{ width: "100% " }}>
  //                 <div className={styles.bar} />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <Footer />
  //     </main>
  //   );
  // }
}
