import { ReactElement, ReactNode } from "react";
import style from "./effect.module.css";
export function SearchlightEffectBox({
  isMobile = false,
  children,
}: {
  isMobile?: boolean;
  children?: ReactNode;
}) {
  return <div className={style.searchlight_effect_box}>{children}</div>;
}

export function SearchlightEffectLight({
  isMobile = false,
  animType,
  id
}: {
  isMobile?: boolean;
  animType: string;
  id: string;
}) {
  let className;
  switch (animType) {
    case "1":
      className = style.searchlight_effect_light_1;
      break;
    case "2":
      className = style.searchlight_effect_light_2;
      break;
    case "3":
      className = style.searchlight_effect_light_3;
      break;
  }
  return (
    <div
      className={className}
      id={id}
    />
  );
}
