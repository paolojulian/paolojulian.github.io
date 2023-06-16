import { ComponentType } from "react";

export type ExtractProps<T> = T extends ComponentType<infer P> ? P : T;

export function getTheme() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}