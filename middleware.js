import { NextResponse } from "next/server";

export function middleware(req) {
  const auth = req.headers.get("authorization");

  const username = "missiona";
  const password = "kadai";
  const expectedAuth = "Basic " + btoa(username + ":" + password);

  if (auth !== expectedAuth) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
