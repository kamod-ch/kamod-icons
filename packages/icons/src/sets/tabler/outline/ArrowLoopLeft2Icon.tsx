import type { IconProps } from "../../../shared/types";

export function ArrowLoopLeft2Icon({
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
      <path d="M13 21v-6m0-6V8a4 4 0 1 1 4 4H4"/><path d="m8 16-4-4 4-4"/>
    </svg>
  );
}
