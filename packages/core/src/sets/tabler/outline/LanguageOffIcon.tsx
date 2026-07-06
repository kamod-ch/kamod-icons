import type { IconProps } from "../../../shared/types";

export function LanguageOffIcon({
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
      <path d="m12 20 2.463-5.541m1.228-2.764L16 11l.8 1.8M18 18h-5.1M8.747 8.748C8.087 11.582 6.211 13 4 13m0-6.629h2.371"/><path d="M5 9c0 2.144 2.252 3.908 6 4M3 3l18 18"/>
    </svg>
  );
}
