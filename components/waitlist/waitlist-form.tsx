"use client";

import { useEffect, useRef, useState } from "react";

import { SITE, WAITLIST_FORM_ID, formEmbedUrl } from "@/lib/site";

const STUDIO_ORIGIN = new URL(SITE.studioAppUrl).origin;
const INITIAL_HEIGHT = 600;

/**
 * The waitlist form, embedded from the Studio.
 *
 * The form posts its own height to the parent whenever it reflows (a
 * validation error, the thank-you state, a phone-width relayout), so the frame
 * grows with it instead of scrolling inside a fixed box. Unlike the generic
 * embed snippet the Studio hands out, this one checks the message origin —
 * this page is ours, so there is no reason to accept a height from anywhere
 * but the Studio.
 */
export function WaitlistForm({ title }: { title: string }) {
  const [height, setHeight] = useState(INITIAL_HEIGHT);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== STUDIO_ORIGIN) return;
      const data = event.data as
        | { type?: string; id?: string; height?: number }
        | null;
      if (!data || data.type !== "coflow-form-resize") return;
      if (data.id !== WAITLIST_FORM_ID) return;
      const next = Number(data.height);
      if (Number.isFinite(next) && next > 0) setHeight(Math.ceil(next));
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={frameRef}
      id={`coflow-form-${WAITLIST_FORM_ID}`}
      src={formEmbedUrl(WAITLIST_FORM_ID)}
      title={title}
      loading="lazy"
      className="block w-full border-0"
      style={{ height }}
    />
  );
}
