import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
 // Add route protection for admin pages
 if (request.nextUrl.pathname.startsWith("/admin")) {
  // Check for auth session cookie
  const session = request.cookies.get("session");
  if (!session) {
   return NextResponse.redirect(new URL("/auth", request.url));
  }
 }

 return NextResponse.next();
}

export const config = {
 matcher: [
  /*
   * Match all request paths except for the ones starting with:
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   * - public folder
   * Add auth routes that should be public
   */
  "/((?!_next/static|_next/image|favicon.ico|public|auth).*)",
 ],
};
