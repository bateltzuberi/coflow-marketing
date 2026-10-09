import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_HEADER, PATH_HEADER, localeRoute } from "./lib/locale-path";

export function proxy(request: NextRequest) {
  const route = localeRoute(request.nextUrl.pathname);
  if (route.redirect) {
    const url = request.nextUrl.clone();
    url.pathname = route.redirect;
    return NextResponse.redirect(url, 308);
  }
  const headers = new Headers(request.headers);
  headers.set(LOCALE_HEADER, route.locale);
  headers.set(PATH_HEADER, request.nextUrl.pathname + request.nextUrl.search);
  return NextResponse.next({ request: { headers } });
}
export const config = {
  matcher: ["/((?!api(?:/|$)|_next(?:/|$)|.*\\.[^/]+$).*)"],
};
