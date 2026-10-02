"use client";

import { useCallback, useRef, useState } from "react";

const PASSO_ZOOM = 0.15;
const ZOOM_MAX = 3;
const ZOOM_MIN = 1;

// Zoom com a roda do mouse sobre a imagem do lightbox, ancorado no ponto
// onde o cursor está (em vez de sempre no centro).
export function useScrollZoom() {
  const [scale, setScale] = useState(ZOOM_MIN);
  const [origin, setOrigin] = useState("center center");
  const imgRef = useRef(null);

  const onWheel = useCallback((e) => {
    e.preventDefault();

    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setOrigin(`${x}% ${y}%`);
    }

    setScale((atual) => {
      const proximo = e.deltaY < 0 ? atual + PASSO_ZOOM : atual - PASSO_ZOOM;
      return Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, proximo));
    });
  }, []);

  const resetZoom = useCallback(() => {
    setScale(ZOOM_MIN);
    setOrigin("center center");
  }, []);

  return { scale, origin, imgRef, onWheel, resetZoom };
}
