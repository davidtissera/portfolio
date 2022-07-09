import { useEffect, useState } from "react";
import { MOBILE_MIN_WIDTH } from "../common/global";
import { useWindowSize } from "./useWindowSize";

export function useMobile() {
  const [isMobile, setMobile] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    setMobile(width < MOBILE_MIN_WIDTH)
  }, [width < MOBILE_MIN_WIDTH])

  return isMobile
}
