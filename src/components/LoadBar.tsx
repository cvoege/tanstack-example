import { useSyncExternalStore } from "react";
import "./LoadBar.css";

let loaders = 0;
const subs: Array<(loaderCount: number) => void> = [];
export const startLoad = () => {
  loaders += 1;
  for (const sub of subs) {
    sub(loaders);
  }
};
export const finishLoad = () => {
  loaders = Math.max(loaders - 1, 0);
  for (const sub of subs) {
    sub(loaders);
  }
};
const subscribe = (fn: (loaderCount: number) => void) => {
  subs.push(fn);
  return () => {
    const i = subs.findIndex((f) => f === fn);
    if (i === -1) {
      return;
    }
    subs.splice(i, 1);
  };
};

export function LoadBar() {
  const loaderCount = useSyncExternalStore(subscribe, () => loaders);

  return (
    <div
      className="load-bar-fill"
      style={{ display: loaderCount === 0 ? "none" : "block" }}
    />
  );
}
