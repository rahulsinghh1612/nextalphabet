import { NextRequest, NextResponse } from "next/server";

// Routes traction.nextalphabet.com/* to the /traction/* pages internally,
// so the subdomain reads as its own site while living in this one repo.
export function proxy(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const isTractionSubdomain = host.startsWith("traction.");

  if (isTractionSubdomain && !req.nextUrl.pathname.startsWith("/traction")) {
    const url = req.nextUrl.clone();
    url.pathname = `/traction${req.nextUrl.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Exclude _next, api, and any path with a file extension (static assets
  // like /icons/traction.png) so only actual pages get the /traction prefix.
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
