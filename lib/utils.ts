/**
 * Tiny class-name helper for Tailwind composition. Used by shadcn-style
 * components copied in from 21st.dev. Avoids a clsx/tailwind-merge
 * dependency — for our usage, plain space-joined strings are enough.
 */
export function cn(...inputs: Array<string | undefined | null | false>): string {
  return inputs.filter(Boolean).join(" ");
}
