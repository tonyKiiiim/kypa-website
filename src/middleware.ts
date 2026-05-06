// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "kr"];
const defaultLocale = "en";
const matcherLocales = ["en", "ko"];
const localePathMap: Record<string, string> = {
  en: "en",
  ko: "kr",
};

function isValidLanguageTag(language: string): boolean {
  if (language === "*") return false;

  try {
    Intl.getCanonicalLocales(language);
    return true;
  } catch {
    return false;
  }
}

function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;

  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders })
    .languages()
    .filter(isValidLanguageTag);

  if (languages.length === 0) return defaultLocale;

  try {
    const matchedLocale = match(languages, matcherLocales, defaultLocale);
    return localePathMap[matchedLocale] ?? defaultLocale;
  } catch {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const isServerAction =
    request.headers.has("next-action") || request.headers.has("Next-Action");

  if (request.method === "POST" || isServerAction) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|icons|fonts|videos).*)"],
};
