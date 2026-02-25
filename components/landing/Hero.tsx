"use client";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="min-h-screen w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 pt-20 pb-10 md:pt-32 md:pb-20 relative">
      <div className="relative z-10 text-center w-full">
        <h1 className="text-center text-3xl font-light tracking-tight text-foreground md:text-4xl lg:text-6xl mb-6">
          For Teams Who Ship Fast
        </h1>

        <p className="text-center text-sm font-medium tracking-tight text-muted-foreground md:text-sm lg:text-base mx-auto mt-6 max-w-lg mb-12">
          The task management platform that actually works. Beautiful,
          intuitive, and built for teams who ship.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="group px-8 py-4 text-lg font-medium bg-primary hover:bg-primary/90"
            asChild
          >
            <a href="/dashboard">Get Started Free</a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group px-6 py-4 text-lg font-medium bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
            asChild
          >
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
