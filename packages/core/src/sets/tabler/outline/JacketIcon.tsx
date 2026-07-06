import type { IconProps } from "../../../shared/types";

export function JacketIcon({
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
      <path d="m16 3-4 5-4-5"/><path d="M12 19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.172a2 2 0 0 1 .586-1.414l.828-.828A2 2 0 0 0 6 7.172V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.172a2 2 0 0 0 .586 1.414l.828.828A2 2 0 0 1 20 10.828V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2"/><path d="M20 13h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3M4 17h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4m8 6V8"/>
    </svg>
  );
}
