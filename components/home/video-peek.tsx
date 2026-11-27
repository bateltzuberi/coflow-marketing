"use client";

import { useEffect, useRef, useState } from "react";

import { Icon } from "./icon";

/**
 * A video card that plays inside the page: a drawn thumbnail with a play
 * button and two lines of words. Clicking it opens the video in a window over
 * the page, so she never leaves the landing page. Nothing loads from YouTube
 * until she clicks (youtube-nocookie, no request on page load).
 */
export function VideoPeek({
  videoId,
  title,
  sub,
  length,
  closeLabel,
}: {
  videoId: string;
  title: string;
  sub: string;
  length: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    openerRef.current?.focus();
  };

  return (
    <>
      <button ref={openerRef} type="button" className="hm-vid" onClick={() => setOpen(true)}>
        <span className="hm-vid-thumb" aria-hidden="true">
          <span className="hm-vid-play">
            <i />
          </span>
          <span className="hm-vid-len">{length}</span>
        </span>
        <span className="hm-vid-words">
          <b>{title}</b>
          <span>{sub}</span>
        </span>
      </button>

      {open && (
        <div className="hm-ov" role="dialog" aria-modal="true" aria-label={title} onClick={close}>
          <div className="hm-vid-box" onClick={(e) => e.stopPropagation()}>
            <button ref={closeRef} type="button" className="hm-x hm-vid-x" aria-label={closeLabel} onClick={close}>
              <Icon name="x" />
            </button>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
