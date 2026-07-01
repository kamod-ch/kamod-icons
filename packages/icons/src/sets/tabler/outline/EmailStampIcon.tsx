import type { IconProps } from "../../../shared/types";

export function EmailStampIcon({
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
      <path d="M7.586 4.586A2 2 0 0 0 6.172 4H6a2 2 0 0 0-2 2v.172a2 2 0 0 0 .586 1.414 2 2 0 0 1 0 2.828A2 2 0 0 0 4 11.828v.344a2 2 0 0 0 .586 1.414c.4.4.595.928.585 1.452-.01.5-.204.995-.585 1.376A2 2 0 0 0 4 17.828V18a2 2 0 0 0 2 2h.172a2 2 0 0 0 1.414-.586 2 2 0 0 1 2.828 0 2 2 0 0 0 1.414.586h.344a2 2 0 0 0 1.414-.586 2 2 0 0 1 2.828 0 2 2 0 0 0 1.414.586H18a2 2 0 0 0 2-2v-.172a2 2 0 0 0-.586-1.414 1.996 1.996 0 0 1 0-2.828A2 2 0 0 0 20 12.172v-.344a2 2 0 0 0-.586-1.414 2 2 0 0 1 0-2.828A2 2 0 0 0 20 6.172V6a2 2 0 0 0-2-2h-.172a2 2 0 0 0-1.414.586 2 2 0 0 1-2.828 0A2 2 0 0 0 12.172 4h-.344a2 2 0 0 0-1.414.586 2 2 0 0 1-2.828 0"/><path d="M10 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-1 5c0-1.105.672-2 1.5-2h3c.828 0 1.5.895 1.5 2"/>
    </svg>
  );
}
