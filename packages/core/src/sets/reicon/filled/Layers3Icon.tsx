import type { IconProps } from "../../../shared/types";

export function Layers3Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="m20.913 5.897-7.825-4.12a2.32 2.32 0 0 0-2.175 0l-7.826 4.12c-.659.347-1.068 1.026-1.068 1.77s.409 1.422 1.068 1.769l7.825 4.12a2.33 2.33 0 0 0 2.175.001l7.826-4.121c.659-.347 1.068-1.025 1.068-1.77s-.41-1.422-1.068-1.769Z"/><path d="M20.981 11a1 1 0 0 0-1 1l-7.826 4.121a.33.33 0 0 1-.31 0L4.02 12a1 1 0 0 0-2 0c0 .745.409 1.423 1.068 1.77l7.825 4.12a2.33 2.33 0 0 0 2.175 0l7.826-4.12A2 2 0 0 0 21.981 12a1 1 0 0 0-1-1Z"/><path d="M20.981 15.333a1 1 0 0 0-1 1l-7.826 4.122a.33.33 0 0 1-.31 0L4.02 16.333a1 1 0 0 0-2 0c0 .746.409 1.423 1.068 1.77l7.825 4.12a2.33 2.33 0 0 0 2.175 0l7.826-4.12a2 2 0 0 0 1.068-1.77 1 1 0 0 0-1-1Z"/></g>
    </svg>
  );
}
