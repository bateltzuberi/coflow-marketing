// A Latin word inside Hebrew copy (CRM) is set in the site's English font, as
// the design guide asks: the run is wrapped in a lang="en" span. The Hebrew
// just before it ("ו-", "בלי ") stays on the same line, so a line of Hebrew
// never starts with a Latin word.
export function inHebrew(text: string, locale: "he" | "en") {
  if (locale === "en") return text;
  return text.split(/((?:[א-ת]+[- ])?[A-Za-z][A-Za-z0-9]*)/).map((part, i) => {
    if (i % 2 === 0) return part;
    const at = part.search(/[A-Za-z]/);
    return (
      <span key={i} className="hm-nowrap">
        {part.slice(0, at)}
        <span lang="en">{part.slice(at)}</span>
      </span>
    );
  });
}
