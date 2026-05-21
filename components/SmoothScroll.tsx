"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.18,        // Aumentado de 0.1 para 0.18 (responde muito mais rápido ao comando)
        duration: 0.6,     // Reduzido de 1.2s para 0.6s (a rolagem termina mais rápido)
        smoothWheel: true,
        syncTouch: false   // Garante que no mobile o scroll use o toque 100% nativo e liso do celular
      }}
    >
      {children as any}
    </ReactLenis>
  );
}