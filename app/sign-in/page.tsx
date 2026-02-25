"use client";

import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Check if user is already logged in and redirect if needed
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: session } = await authClient.getSession();
        if (session?.user) {
          const redirectUrl = searchParams.get("redirect") || "/dashboard";
          router.push(redirectUrl);
        }
      } catch (error) {
        // Session check failed, allow user to stay on sign-in page
        console.error("Session check error:", error);
      }
    };
    checkSession();
  }, [router, searchParams]);

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      const redirectUrl = searchParams.get("redirect") || "/dashboard";
      await authClient.signIn.social({
        provider: "google",
        callbackURL: redirectUrl,
      });
    } catch (err) {
      setError("Failed to sign in with Google");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="text-foreground text-xl font-medium tracking-tight">
              Stride
            </span>
          </div>

          {/* Welcome Message */}
          <div className="space-y-2">
            <h1 className="text-3xl font-light tracking-tight text-foreground">
              Welcome back
            </h1>
            <p className="text-base text-muted-foreground">
              Sign in to your account to continue your journey with Stride
            </p>
          </div>

          {error && (
            <div className="rounded-md bg-destructive/15 border border-destructive/50 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {/* Google Sign In Button */}
          <Button
            type="button"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 justify-center"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <span className="ml-2">
              {loading ? "Signing in..." : "Sign in with Google"}
            </span>
          </Button>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href={`/sign-up${searchParams.get("redirect") ? `?redirect=${searchParams.get("redirect")}` : ""}`}
              className="text-primary hover:text-primary/80 hover:underline font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
