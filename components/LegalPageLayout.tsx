import Link from "next/link";
import type { ReactNode } from "react";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageLayoutProps = {
  chapter: string;
  title: string;
  intro?: string;
  sections: LegalSection[];
  updatedAt?: string;
};

export default function LegalPageLayout({
  chapter,
  title,
  intro,
  sections,
  updatedAt,
}: LegalPageLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-12 md:py-24 lg:py-28">
      <Link
        href="/"
        className="mb-8 inline-block text-[10px] font-medium uppercase tracking-[0.4em] text-or transition-colors hover:text-encre"
      >
        Retour à l&apos;accueil
      </Link>

      <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-or">
        {chapter}
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-headline)] text-balance text-4xl leading-tight text-encre md:text-5xl">
        {title}
      </h1>

      {intro ? (
        <p className="mt-6 text-base font-light leading-relaxed text-secondary md:text-lg">
          {intro}
        </p>
      ) : null}

      {updatedAt ? (
        <p className="mt-4 text-xs text-secondary/80">
          Dernière mise à jour : {updatedAt}
        </p>
      ) : null}

      <div className="mt-12 space-y-10 border-t border-encre/10 pt-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="flex items-baseline gap-4 font-[family-name:var(--font-headline)] text-xl text-encre md:text-2xl">
              <span className="text-[11px] tracking-[0.3em] text-or">
                {String(index + 1).padStart(2, "0")}
              </span>
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-[15px] font-light leading-relaxed text-secondary [&_a]:text-encre [&_a]:underline [&_a]:decoration-or/50 [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-or [&_li]:ml-4 [&_li]:list-disc [&_ol]:list-decimal [&_ol]:pl-4 [&_ul]:space-y-2">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
