"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Dot Pattern Background - Square Container */}
      <div className="absolute inset-0 flex items-center justify-center z-0"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Big Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center tracking-tight mb-6 sm:mb-8">
          Ready to get things done?
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-center text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
          Join thousands of teams already using Lynq to manage their tasks and
          boost productivity.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <Button
            size="lg"
            className="group px-8 py-4 text-lg font-medium bg-primary hover:bg-primary/90 shadow-lg"
            asChild
          >
            <Link href="/dashboard">Get Started Free</Link>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Baisayan/lynq"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Source
              <GithubIcon />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
