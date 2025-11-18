import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Last updated: November 18, 2025
          </p>
        </header>
        <div className="mt-10 max-w-3xl space-y-8 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Information We Collect
            </h2>
            <p className="mt-4">
              We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
            </p>
            <p className="mt-4">
              The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Log Data
            </h2>
            <p className="mt-4">
              We automatically collect certain information when you visit, use, or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Cookies and Tracking Technologies
            </h2>
            <p className="mt-4">
              We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy, which is incorporated into this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Google AdSense and Advertising
            </h2>
            <p className="mt-4">
              This Website uses Google AdSense, a service for the inclusion of advertisements from Google Inc. ("Google"). Google AdSense uses "cookies", which are text files placed on your computer, to help the website analyze how users use the site. Google uses the DoubleClick DART cookie to serve ads based on a user's prior visits to this website and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
            </p>
            <p className="mt-4">
              We have implemented the following for Google AdSense: Remarketing, Google Display Network Impression Reporting, Demographics and Interests Reporting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Changes to This Privacy Policy
            </h2>
            <p className="mt-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
}
