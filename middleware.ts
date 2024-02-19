import { authMiddleware } from "@clerk/nextjs";

/**
 * 1. To make the route accessible to both signed in and signed out users, pass `publicRoutes: ["/"]` to authMiddleware
   2. To prevent Clerk authentication from running at all, pass `ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/"]` to authMiddleware  
   3. Pass a custom `afterAuth` to authMiddleware, and replace Clerk's default behavior of redirecting unless a route is included in publicRoutes
 */
export default authMiddleware({
  publicRoutes: ["/api/webhooks/clerk"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
