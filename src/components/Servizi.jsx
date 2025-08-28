import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import SplitText from "gsap/SplitText";          // 🔧 importa i plugin dalle entry corrette
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Servizi = () => {
  useGSAP(() => {
    const run = () => {
      const s1 = new SplitText("#servizi-1", { type: "words" });
      const s2 = new SplitText("#servizi-2", { type: "words" });

      // 🔧 Rendi le parole animabili con yPercent e prepara lo stato iniziale (necessario con scrub)
      gsap.set([s1.words, s2.words], { display: "inline-block", opacity: 0, yPercent: 100 });

      // 🔧 Collega direttamente lo ScrollTrigger alla timeline (più stabile)
      const tl = gsap.timeline({
        defaults: { ease: "expo.out", duration: 1 },
        scrollTrigger: {
          trigger: "#servizi",             // usa la sezione come trigger
          pin: "#container-servizi",       // 🔧 pinna il wrapper (con dimensioni reali)
          start: "top top",
          end: "+=1200",                   // quanto scroll controlla tutta la sequenza
          scrub: true,
          markers: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // prima frase → IN → OUT → seconda frase → IN (solo .to con scrub)
      tl.to(s1.words, { opacity: 1, yPercent: 0, stagger: 0.03 })
        .to(s1.words, { opacity: 0, yPercent: -100, stagger: 0.02 }, ">+0.15")
        .to(s2.words, { opacity: 1, yPercent: 0, stagger: 0.03 });

      // 🔧 Dopo aver creato split & timeline, rifai il layout dei trigger
      ScrollTrigger.refresh();

      return () => {
        s1.revert();
        s2.revert();
      };
    };

    if (document.fonts && document.fonts.status !== "loaded") {
      let cleanup;
      document.fonts.ready.then(() => (cleanup = run()));
      return () => cleanup?.();
    } else {
      return run();
    }
  }, []);

  return (
    <div id="servizi" className="relative h-screen w-screen bg-amber-200 overflow-x-hidden">
      {/* 🔧 dai dimensioni reali al container e rendilo relative */}
      <div id="container-servizi" className="relative w-full h-full">
        <p
          id="servizi-1"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        >
          Offriamo servizi di marketing, web,<br />e tutto ciò che riguarda il digital
        </p>

        <p
          id="servizi-2"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        >
          Il lavoro di eMark è uno: aiutare le aziende <br /> a raggiungere in modo ottimale i propri obiettivi.
        </p>
      </div>
    </div>
  );
};

export default Servizi;
