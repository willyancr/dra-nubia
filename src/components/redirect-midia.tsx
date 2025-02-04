import { ComponentProps } from "react";

export default function RedirectMidiaSocial({
  href,
  children,
}: ComponentProps<"a">) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-sm hover:text-tertiary hover:underline"
    >
      {children}
    </a>
  );
}
