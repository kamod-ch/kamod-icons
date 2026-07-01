import type { IconProps } from "../../../shared/types";

export function DatabaseScriptIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 14V6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 21H6a4 4 0 0 1 0-8h12a4 4 0 1 0 4 4v-3"/>
    </svg>
  );
}
