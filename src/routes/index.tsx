import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { useState } from "react";
import { ProfilePhoto, ProjectCard, SectionHeading, TechGroup } from "../components/home";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const year = new Date().getFullYear();
  const [photoError, setPhotoError] = useState(false);

  return (
    <main className="min-h-screen bg-(--color-bg) text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <header className="flex items-center justify-between">
          <p className="font-semibold text-lg tracking-tight">
            <span className="text-(--color-accent)">{"//"}</span>AC
          </p>
          <div className="flex items-center gap-4 text-slate-300 text-xs uppercase tracking-[0.15em]">
            <div className="flex items-center gap-5">
              <a className="transition hover:text-(--color-accent-soft)" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-(--color-accent-soft)" href="#contact">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <a
                className="inline-flex rounded-full p-1.5 transition hover:text-(--color-accent-fg)"
                href="https://github.com/AndreaCossio"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.68c-2.78.6-3.37-1.18-3.37-1.18a2.66 2.66 0 0 0-1.12-1.47c-.92-.62.07-.6.07-.6a2.1 2.1 0 0 1 1.53 1.03 2.14 2.14 0 0 0 2.92.83 2.14 2.14 0 0 1 .64-1.34c-2.22-.25-4.56-1.12-4.56-4.96a3.88 3.88 0 0 1 1.03-2.69 3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.02a9.49 9.49 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.03 2.69c0 3.85-2.34 4.7-4.57 4.95a2.38 2.38 0 0 1 .68 1.85v2.74c0 .27.18.59.69.49A10 10 0 0 0 12 2Z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                className="inline-flex rounded-full p-1.5 transition hover:text-(--color-accent-fg)"
                href="https://linkedin.com/in/andreacossio"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.94 8.5a1.56 1.56 0 1 1 .01-3.12 1.56 1.56 0 0 1 0 3.12Zm-1.34 10.1h2.68v-8.6H5.6v8.6Zm4.34 0h2.67v-4.8c0-1.26.24-2.48 1.8-2.48 1.54 0 1.56 1.44 1.56 2.57v4.71H18.64v-5.27c0-2.59-.56-4.57-3.58-4.57-1.45 0-2.42.8-2.82 1.56h-.04v-1.32H9.94v8.6Z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                className="inline-flex rounded-full p-1.5 transition hover:text-(--color-accent-fg)"
                download
                href="/00_Andrea_Cossio_CV.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
              >
                <FileText className="h-4 w-4" />
              </a>
            </div>
          </div>
        </header>

        <section className="mt-14 grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div className="space-y-8">
            <h1 className="max-w-4xl text-center font-bold text-4xl leading-tight tracking-tight sm:text-6xl md:text-left">
              Hey, I&apos;m <span className="text-(--color-accent-soft)">Andrea Cossio</span>.
            </h1>
            <ProfilePhoto
              photoError={photoError}
              setPhotoError={setPhotoError}
              className="mx-auto w-full max-w-44 md:hidden"
            />
            <p className="max-w-4xl text-lg text-slate-300 leading-relaxed sm:text-2xl">
              Building resilient systems from digitizing complex compliance workflows to scalable full-stack web
              applications.
            </p>
            <div className="h-1 w-24 rounded-full bg-(--color-accent)" />
            <p className="text-base text-slate-300">Based in Zürich, Switzerland.</p>
          </div>

          <ProfilePhoto
            photoError={photoError}
            setPhotoError={setPhotoError}
            className="mx-auto hidden w-full max-w-xs md:block"
          />
        </section>

        <section className="mt-16 border-(--color-border) border-t pt-12 sm:mt-20 sm:pt-14">
          <SectionHeading title="About" />
          <p className="mt-5 max-w-4xl text-slate-300 text-sm leading-relaxed sm:text-base">
            I am a Senior Software Engineer based in Zürich, Switzerland, specializing in building robust enterprise
            solutions and modern full-stack web applications. With a strong foundation in low-code architecture and
            complex data integrations, I focus on automating critical business processes and eliminating technical debt.
            Beyond the enterprise space, I am deeply invested in the modern JavaScript/TypeScript ecosystem,
            continuously exploring scalable patterns, custom infrastructure, and algorithmic efficiency.
          </p>
        </section>

        <section className="mt-16 border-(--color-border) border-t pt-12 sm:mt-20 sm:pt-14" id="projects">
          <SectionHeading title="Projects" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ProjectCard
              name="Auphi"
              description="A modern, high-performance personal finance tracking application."
              stack="React, TanStack Start, Convex, Bun, Biome"
            />
            <ProjectCard
              name="CrownLabs"
              description="A cloud platform currently utilized by university professors to deploy on-demand lab environments, allowing students to access specialized IT setups remotely."
              stack="Kubernetes, Docker, Go/Python"
            />
          </div>
        </section>

        <section className="mt-16 border-(--color-border) border-t pt-12 sm:mt-20 sm:pt-14">
          <SectionHeading title="Lab & Infrastructure" />
          <div className="mt-5 rounded-xl border border-(--color-border) bg-(--color-surface-muted) p-6">
            <p className="text-slate-300 text-sm leading-relaxed sm:text-base">
              Running a personal home lab utilizing Proxmox, Docker, and Caddy to self-host media, networking services,
              and custom applications.
            </p>
          </div>
        </section>

        <section className="mt-16 border-(--color-border) border-t pt-12 sm:mt-20 sm:pt-14">
          <SectionHeading title="Tech Stack" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <TechGroup
              label="Modern Web & Full-Stack"
              items="React, Next.js, TanStack Start, Convex, Node.js, Bun, Biome"
            />
            <TechGroup
              label="Enterprise Architecture"
              items="Appian (Certified Senior Developer), BPM, Process Mining"
            />
            <TechGroup label="Database & Auth" items="Postgres, Drizzle ORM, Better Auth, SQL" />
            <TechGroup label="Languages" items="TypeScript, JavaScript, Python, Java" />
            <TechGroup label="Infrastructure & CI/CD" items="Proxmox, Docker, Caddy, Kubernetes" />
          </div>
        </section>

        <footer className="mt-16 border-(--color-border) border-t pt-8 text-slate-400 text-sm sm:mt-20" id="contact">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <a className="transition hover:text-(--color-accent-fg)" href="mailto:andreacossio96@outlook.com">
              andreacossio96@outlook.com
            </a>
            <p>&copy; {year} Andrea Cossio</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
