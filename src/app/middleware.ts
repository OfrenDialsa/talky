import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuid } from "uuid";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const hasSession = req.cookies.get("talky_session_id");
  if (!hasSession) {
    res.cookies.set("talky_session_id", uuid(), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });
  }

  return res;
}
