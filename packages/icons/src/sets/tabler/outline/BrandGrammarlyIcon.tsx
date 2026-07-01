import type { IconProps } from "../../../shared/types";

export function BrandGrammarlyIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M15.697 9.434a4.5 4.5 0 1 0 .217 4.788"/><path d="M13.5 14H16v2.5"/>
    </svg>
  );
}
