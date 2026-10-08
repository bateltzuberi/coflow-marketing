"use client";

import { useEffect, useState } from "react";

/**
 * "Built for …" under the headline: each audience types out, waits, erases,
 * and the next one comes. The caret is pink, the studio's colour for "now".
 * With reduced motion the words simply change every two seconds.
 */
export function TypedLine({ lead, words }: { lead: string; words: readonly string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      let i = 0;
      const id = setInterval(() => {
        i = (i + 1) % words.length;
        setText(words[i]);
      }, 2000);
      return () => clearInterval(id);
    }
    let w = 0;
    let c = words[0].length;
    let erasing = true;
    const tick = () => {
      if (erasing) {
        c -= 1;
        setText(words[w].slice(0, c));
        if (c === 0) {
          erasing = false;
          w = (w + 1) % words.length;
        }
        timer = setTimeout(tick, c === 0 ? 250 : 32);
        return;
      }
      c += 1;
      setText(words[w].slice(0, c));
      if (c === words[w].length) {
        erasing = true;
        timer = setTimeout(tick, 1500);
        return;
      }
      timer = setTimeout(tick, 70);
    };
    timer = setTimeout(tick, 1500);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <p className="hm-typed" aria-label={`${lead} ${words.join(", ")}`}>
      <span aria-hidden="true">{lead}&nbsp;</span>
      <span className="hm-tw" aria-hidden="true">
        {text}
      </span>
      <span className="hm-caret" aria-hidden="true" />
    </p>
  );
}
