"use client";

import { useEffect, useState } from "react";

/**
 * "Built for …" under the headline: each audience types out, waits, erases,
 * and the next one comes. The caret is pink, the studio's colour for "now".
 * It types with Reduce Motion on too; only the caret stops blinking.
 */
export function TypedLine({ lead, words }: { lead: string; words: readonly string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    // Typing is text changing, not movement, so it runs with Reduce Motion
    // on too (it used to fall back to swapping whole words, which on a phone
    // with that setting looked like the typing didn't work). Only the caret's
    // blink is switched off for reduced motion, in home.css.
    let timer: ReturnType<typeof setTimeout>;
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
