import { ReactElement, ReactNode } from "react";
import style from "./effect.module.css";
export function SearchlightEffectBox({
  isMobile = false,
  children,
  onClick,
}: {
  isMobile?: boolean;
  children?: ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      className={
        isMobile
          ? style.searchlight_effect_box_mobile
          : style.searchlight_effect_box
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function SearchlightEffectLight({
  isMobile = false,
  animType,
  id,
}: {
  isMobile?: boolean;
  animType: string;
  id: string;
}) {
  let className;
  switch (animType) {
    case "1":
      className = isMobile
        ? style.searchlight_effect_light_1_mobile
        : style.searchlight_effect_light_1;
      break;
    case "2":
      className = isMobile
        ? style.searchlight_effect_light_2_mobile
        : style.searchlight_effect_light_2;
      break;
    case "3":
      className = isMobile
        ? style.searchlight_effect_light_3_mobile
        : style.searchlight_effect_light_3;
      break;
  }
  return <div className={className} id={id} />;
}
