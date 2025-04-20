import { useEffect } from "react";

export const useDisableBodyScroll = (isActive) => {
  useEffect(() => {
    if (isActive) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflowY = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflowY = "";
      document.body.style.paddingRight = "";
    };
  }, [isActive]);
};
