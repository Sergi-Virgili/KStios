import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen px-4 py-8 md:px-6 md:py-12">
      {children}
    </main>
  );
}
