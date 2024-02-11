import { NextResponse } from "next/server";
import { useSession } from "./app/utils";

const protectedRoute = ["/", "/setting"];
const publicRoute = ["/masuk", "/lupa-password", "/new-password", "/daptar"];

export default function middleware(req: any) {
  if (!useSession && protectedRoute.includes(req.nextUrl.pathname)) {
    const absoluteUrl = new URL("/masuk", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }

  if (useSession && publicRoute.includes(req.nextUrl.pathname)) {
    const absoluteUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
}
