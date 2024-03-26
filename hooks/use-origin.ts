import { useState, useEffect } from "react";

// custom hook
// sử dụng để lấy ra origin của trang web, tức là URL gốc của trang web hiện tại
export const useOrigin = () => {
  const [mouted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  if (!mouted) {
    return "";
  }

  return origin;
};
