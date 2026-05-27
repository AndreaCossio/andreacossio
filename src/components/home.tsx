import type { Dispatch, ReactNode, SetStateAction } from "react";

type ProjectCardProps = {
  name: string;
  description: string;
  stack: string;
};

type TechGroupProps = {
  label: string;
  items: string;
};

type ProfilePhotoProps = {
  photoError: boolean;
  setPhotoError: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

type SocialLinkProps = {
  href: string;
  children: ReactNode;
  download?: boolean;
};

export function SectionHeading({ title }: { title: string }) {
  return <h2 className="font-semibold text-slate-100 text-xl tracking-tight sm:text-2xl">{title}</h2>;
}

export function ProjectCard({ name, description, stack }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-(--color-border) bg-(--color-surface-muted) p-6">
      <h3 className="font-medium text-lg text-slate-100">{name}</h3>
      <p className="mt-3 text-slate-300 text-sm leading-relaxed">{description}</p>
      <p className="mt-4 text-slate-400 text-sm">
        <span className="text-slate-200">Stack:</span> {stack}
      </p>
    </article>
  );
}

export function TechGroup({ label, items }: TechGroupProps) {
  return (
    <div className="rounded-xl border border-(--color-border) bg-(--color-surface-muted) p-5">
      <h3 className="font-medium text-slate-200 text-sm">{label}</h3>
      <p className="mt-2 text-slate-300 text-sm leading-relaxed">{items}</p>
    </div>
  );
}

export function ProfilePhoto({ photoError, setPhotoError, className = "" }: ProfilePhotoProps) {
  return (
    <div className={className}>
      {!photoError ? (
        <img
          alt="Portrait"
          className="aspect-square w-full rounded-full border border-(--color-border-strong) object-cover md:rounded-2xl"
          src="/profile.jpg"
          onError={() => setPhotoError(true)}
        />
      ) : (
        <div className="flex aspect-square w-full items-center justify-center rounded-full border border-(--color-border-strong) border-dashed bg-(--color-surface-muted) p-5 text-center text-slate-400 text-sm md:rounded-2xl">
          Add your photo at /public/profile.jpg
        </div>
      )}
    </div>
  );
}

export function SocialLink({ href, children, download }: SocialLinkProps) {
  return (
    <a
      className="inline-flex items-center gap-2 rounded-full border border-(--color-border-strong) px-4 py-2 text-slate-200 text-sm transition hover:border-(--color-accent-soft) hover:text-(--color-accent-fg)"
      href={href}
      target="_blank"
      rel="noreferrer"
      download={download}
    >
      {children}
    </a>
  );
}
