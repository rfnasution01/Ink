import { NextRequest, NextResponse } from "next/server";

const publicRoute = ["/masuk", "/lupa-password", "/new-password", "/daptar"];

export default function middleware(request: NextRequest) {
  const useSession = request.cookies.get("token")?.value;

  if (!useSession && !publicRoute.includes(request.nextUrl.pathname)) {
    const absoluteUrl = new URL("/masuk", request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }

  if (useSession && publicRoute.includes(request.nextUrl.pathname)) {
    const absoluteUrl = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
