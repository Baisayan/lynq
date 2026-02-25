"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUpPage() {
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);

    try {
      const redirectUrl = searchParams.get("redirect") || "/dashboard";
      await authClient.signIn.social({
        provider: "google",
        callbackURL: redirectUrl,
      });
    } catch (err) {
      setError("Failed to sign up with Google");
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
              Create your account
            </h1>
            <p className="text-base text-muted-foreground">
              Sign up to start your journey with Stride
            </p>
          </div>

          {error && (
            <div className="rounded-md bg-destructive/15 border border-destructive/50 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {/* Google Sign Up Button */}
          <Button
            type="button"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 justify-center"
            onClick={handleGoogleSignUp}
            disabled={loading}
          >
            <span className="ml-2">
              {loading ? "Signing up..." : "Sign up with Google"}
            </span>
          </Button>

          {/* Sign In Link */}
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href={`/sign-in${searchParams.get("redirect") ? `?redirect=${searchParams.get("redirect")}` : ""}`}
              className="text-primary hover:text-primary/80 hover:underline font-medium"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
