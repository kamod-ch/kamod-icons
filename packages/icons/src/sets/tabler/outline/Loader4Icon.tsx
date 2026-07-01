import type { IconProps } from "../../../shared/types";

export function Loader4Icon({
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
      <path d="M12 21v-3m6.36.36-2.12-2.12M21 12h-3m.36-6.36-2.12 2.12M12 3v3m-6.36-.36 2.12 2.12M4 12h2m1 4.95.71-.71"/>
    </svg>
  );
}
