import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Last updated: November 18, 2025
          </p>
        </header>
        <div className="mt-10 max-w-3xl space-y-8 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              1. Acceptance of Terms
            </h2>
            <p className="mt-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              2. Intellectual Property
            </h2>
            <p className="mt-4">
              The website and its original content, features, and functionality are owned by the website owner and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              3. Termination
            </h2>
            <p className="mt-4">
              We may terminate your access to the site, without cause or notice, which may result in the forfeiture and destruction of all information associated with you. All provisions of this Agreement that, by their nature, should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              4. Governing Law
            </h2>
            <p className="mt-4">
              This Agreement (and any further rules, policies, or guidelines incorporated by reference) shall be governed and construed in accordance with the laws of [Your Jurisdiction], without giving effect to any principles of conflicts of law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              5. Changes to This Agreement
            </h2>
            <p className="mt-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms of Service by posting the updated terms on the website. Your continued use of the website after any such changes constitutes your acceptance of the new Terms of Service.
            </p>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
}
