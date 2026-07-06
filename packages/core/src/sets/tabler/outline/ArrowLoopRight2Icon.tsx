import type { IconProps } from "../../../shared/types";

export function ArrowLoopRight2Icon({
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
      <path d="M12 21v-6m0-6V8a4 4 0 1 0-4 4h13"/><path d="m17 16 4-4-4-4"/>
    </svg>
  );
}
