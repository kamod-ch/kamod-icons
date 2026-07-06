import type { IconProps } from "../../../shared/types";

export function MacroOffIcon({
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
      <path d="M6 15a6 6 0 0 0 11.47 2.467"/><path d="M15.53 15.53A6 6 0 0 0 12 21"/><path d="M12 21a6 6 0 0 0-6-6m6 6V11m-1.134-.13a5.01 5.01 0 0 1-3.734-3.723M7 3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-2.604 4.389M3 3l18 18"/>
    </svg>
  );
}
