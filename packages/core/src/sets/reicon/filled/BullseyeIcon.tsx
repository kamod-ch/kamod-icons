import type { IconProps } from "../../../shared/types";

export function BullseyeIcon({
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
      <path fill="currentColor" d="M12.75 2a.75.75 0 0 0-.75-.75C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12a.75.75 0 0 0-1.5 0A9.25 9.25 0 1 1 12 2.75a.75.75 0 0 0 .75-.75Z"/><path fill="currentColor" d="M11.735 6.95a.75.75 0 0 0-.884-.585A5.752 5.752 0 0 0 12 17.75a5.75 5.75 0 0 0 5.635-4.601.75.75 0 0 0-1.47-.299A4.252 4.252 0 0 1 7.75 12a4.25 4.25 0 0 1 3.4-4.165.75.75 0 0 0 .585-.885Z"/><path fill="currentColor" d="M14.5 8.44V5.62a2 2 0 0 1 .586-1.414l2.134-2.134a.75.75 0 0 1 1.28.53V5.44l.059.059h2.837a.75.75 0 0 1 .53 1.28l-2.133 2.134a2 2 0 0 1-1.414.586H15.56l-3.03 3.03a.75.75 0 1 1-1.061-1.06z"/>
    </svg>
  );
}
