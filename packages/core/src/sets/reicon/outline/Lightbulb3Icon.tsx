import type { IconProps } from "../../../shared/types";

export function Lightbulb3Icon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v1.333m7.779 1.888-.943.943M23 12h-1.333M4.221 4.221l.943.943M1 12h1.333m16 0a6.34 6.34 0 0 0-7.704-6.19c-2.496.525-4.468 2.612-4.876 5.13a6.33 6.33 0 0 0 3.914 6.936v2.457a2 2 0 0 0 2 2h.666a2 2 0 0 0 2-2v-2.457c2.34-.93 4-3.204 4-5.876m-9.137 5.667h5.608"/>
    </svg>
  );
}
