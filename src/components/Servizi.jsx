"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"; // Assicurati che il plugin sia disponibile (Club GSAP)

// Registra i plugin una sola volta
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function Servizi() {
  const root = useRef(null);

  useGSAP(
    () => {
      // Isola i selettori a questo componente
      const ctx = gsap.context(() => {
        const s1 = new SplitText("#servizi-1", { type: "words" });
        const s2 = new SplitText("#servizi-2", { type: "words" });

        // stato iniziale
        gsap.set([s1.words, s2.words], {
          display: "inline-block",
          opacity: 0,
          yPercent: 100,
        });

        const tl = gsap.timeline({
          defaults: { ease: "expo.out", duration: 1 },
          scrollTrigger: {
            trigger: "#container-servizi", // usa il wrapper come trigger
            pin: true, // pinna direttamente il trigger (più semplice/robusto)
            start: "top top",
            end: "+=1200",
            scrub: true,
            markers: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        tl.to(s1.words, { opacity: 1, yPercent: 0, stagger: 0.03 })
          .to(s1.words, { opacity: 0, yPercent: -100, stagger: 0.02 }, ">+0.15")
          .to(s2.words, { opacity: 1, yPercent: 0, stagger: 0.03 });

        // (opzionale) se carichi webfont, rifresha i trigger dopo
        ScrollTrigger.refresh();

        // cleanup: ricompone il testo e rimuove i trigger
        return () => {
          s1.revert();
          s2.revert();
        };
      }, root);

      return () => ctx.revert();
    },
    { scope: root }
  );

  return (
    <section id="servizi" ref={root} className="relative min-h-screen w-screen bg-black overflow-x-hidden">
      {/* Wrapper pinned/trigger */}
      <div id="container-servizi" className="relative min-h-screen flex items-center justify-center">
        <p id="servizi-1" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-3xl md:text-4xl text-white" style={{ willChange: "transform, opacity" }}>
          Offriamo servizi di marketing, web,
          <br />
          e tutto ciò che riguarda il digital
        </p>

        <p id="servizi-2" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-3xl md:text-4xl text-white" style={{ willChange: "transform, opacity" }}>
          Il lavoro di eMark è uno: aiutare le aziende
          <br /> a raggiungere in modo ottimale i propri obiettivi.
        </p>
      </div>
    </section>
  );
}
