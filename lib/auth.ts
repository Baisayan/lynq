import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import prisma from "./db";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  baseURL: process.env.BETTER_AUTH_URL!,
  secret: process.env.BETTER_AUTH_SECRET!,
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 1000, // 1 hour
    },
  },
  trustedOrigins: [
    process.env.BETTER_AUTH_URL!,
    process.env.NEXT_PUBLIC_APP_URL!,
    "http://localhost:3000",
  ],
  plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;

// Session helpers for server-side
export async function getAuthUser() {
  const session = await auth.api.getSession({
    headers: await import("next/headers").then((m) => m.headers()),
  });
  return session?.user?.id;
}

export async function requireAuth() {
  const session = await auth.api.getSession({
    headers: await import("next/headers").then((m) => m.headers()),
  });

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  return session.user.id;
}

export async function currentUser() {
  const session = await auth.api.getSession({
    headers: await import("next/headers").then((m) => m.headers()),
  });
  return session?.user || null;
}
