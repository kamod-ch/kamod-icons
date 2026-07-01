import type { IconProps } from "../../../shared/types";

export function HomeEcoIcon({
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
      <path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h5"/><path d="M9 21v-6a2 2 0 0 1 2-2h2c.325 0 .631.077.902.215M16 22s0-2 3-4"/><path d="M19 21a3 3 0 0 1 0-6h3v3a3 3 0 0 1-3 3"/>
    </svg>
  );
}
