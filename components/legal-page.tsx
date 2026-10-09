import { Nav } from "./nav";
import { Footer } from "./footer";
import { getLocale } from "@/lib/locale";
import { LEGAL } from "@/lib/legal-content";

/** The terms of use / privacy policy, in the reader's language, in the site's look. */
export async function LegalPage({ doc }: { doc: "terms" | "privacy" }) {
  const locale = (await getLocale()) === "en" ? "en" : "he";
  const d = LEGAL[doc][locale];
  return (
    <>
      <Nav />
      <main className="container-page">
        <article className="mx-auto max-w-[760px] pt-10 md:pt-16 pb-8 text-ink-900">
          <h1 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.03em]">{d.title}</h1>
          <p className="mt-3 text-[15px] text-ink-500">{d.updated}</p>
          <div className="mt-10 flex flex-col gap-4 text-[16.5px] leading-[1.75] text-ink-700">
            {d.blocks.map((b, i) => {
              if (b.t === "h2")
                return (
                  <h2 key={i} className="mt-8 text-[22px] md:text-[24px] font-extrabold leading-tight text-ink-900">
                    {b.x}
                  </h2>
                );
              if (b.t === "h3")
                return (
                  <h3 key={i} className="mt-3 text-[18px] font-bold text-ink-900">
                    {b.x}
                  </h3>
                );
              if (b.t === "ul")
                return (
                  <ul key={i} className="list-disc ps-6 flex flex-col gap-2">
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              if (b.t === "table")
                return (
                  <div key={i} className="overflow-x-auto rounded-2xl border border-line bg-surface">
                    <table className="w-full text-[14.5px] leading-snug">
                      <thead className="bg-surface-2 text-ink-900">
                        <tr>
                          {b.head.map((h) => (
                            <th key={h} className="text-start font-bold px-4 py-3">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {b.rows.map((r) => (
                          <tr key={r[0]} className="border-t border-line align-top">
                            {r.map((c, j) => (
                              <td key={j} className="px-4 py-3">
                                {c}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              return (
                <p key={i}>
                  {"label" in b && b.label ? <b className="font-bold text-ink-900">{b.label}: </b> : null}
                  {b.x}
                </p>
              );
            })}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
