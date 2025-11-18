import { Link } from "wouter";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-32">
      <Container>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <Link href="/privacy-policy" className="transition hover:text-teal-500">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="transition hover:text-teal-500">
                Terms of Service
              </Link>
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
