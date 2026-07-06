import type { IconProps } from "../../../shared/types";

export function HomeSignalIcon({
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
      <path d="M15 22v-2m3 2v-4m3 4v-6m-2-3.506V12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h4"/><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5"/>
    </svg>
  );
}
