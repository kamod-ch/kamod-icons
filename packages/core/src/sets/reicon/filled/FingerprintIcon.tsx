import type { IconProps } from "../../../shared/types";

export function FingerprintIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M5.636 3.746a9 9 0 0 1 11.989-.662 1 1 0 0 1-1.25 1.561A7 7 0 0 0 5 10.11V17a1 1 0 1 1-2 0v-6.89a9 9 0 0 1 2.636-6.364Z"/><path fill="currentColor" d="M8.464 6.464A5 5 0 0 1 17 10v8.11a5 5 0 0 1-5 5 1 1 0 0 1 0-2 3 3 0 0 0 3-3V10a3 3 0 0 0-6 0v1.11a1 1 0 0 1-2 0V10a5 5 0 0 1 1.464-3.536Zm11.032.678a1 1 0 0 1 1.218.718A9 9 0 0 1 21 10.11v8a1 1 0 0 1-2 0v-8c0-.596-.076-1.183-.222-1.75a1 1 0 0 1 .718-1.218Z"/><path fill="currentColor" d="M12 9a1 1 0 0 1 1 1v8.11a1 1 0 0 1-2 0V10a1 1 0 0 1 1-1Zm-4 5.61a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0v-2.5a1 1 0 0 1 1-1Z"/>
    </svg>
  );
}
