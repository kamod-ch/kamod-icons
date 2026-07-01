import type { IconProps } from "../../../shared/types";

export function AntennaBars2Icon({
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
      <path d="M6 18v-3m4 3v.01m4-.01v.01m4-.01v.01"/>
    </svg>
  );
}
