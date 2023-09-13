import { AnimationSequence, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const useMenuAnimation = (isOpen: boolean) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
        ["nav", { transform: "translateX(0%)" }, { duration: 0.25 }]
      ]
      : [["nav", { transform: "translateX(100%)" }, { duration: 0.25 }]];
    animate([...menuAnimations] as AnimationSequence);
  }, [isOpen]);

  return scope;
};
